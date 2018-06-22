import { ApolloClient } from "apollo-boost";
import { HttpLink } from "apollo-boost";
import { ApolloLink } from "apollo-link";
import { withClientState } from "apollo-link-state";
import { InMemoryCache } from "apollo-boost";
import fetch from "isomorphic-unfetch";
import gql from "graphql-tag";

let apolloClient = null;

const httpLink = new HttpLink({
  uri: "https://api.offcourse.io/graphql"
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: "GUEST"
    }
  });
  return forward(operation);
});

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

const defaults = {
  sidebar: {
    __typename: "SidebarStatus",
    isOpen: false
  }
};

const resolvers = {
  Mutation: {
    toggleSidebar: (_, variables, { cache, getCacheKey }) => {
      const query = gql`
        {
          sidebar @client {
            isOpen
          }
        }
      `;
      const previous = cache.readQuery({ query });
      const { __typename, isOpen } = previous.sidebar;
      const data = { sidebar: { __typename, isOpen: !isOpen } };
      cache.writeData({ data });
      return null;
    }
  }
};
const typeDefs = `
  type SidebarStatus {
    isOpen: Boolean!
  }

  type Mutation {
    toggleSidebar: SidebarStatus
  }

  type Query {
    sidebar: SidebarStatus
  }
`;

function create(initialState) {
  const cache = new InMemoryCache().restore(initialState || {});
  const stateLink = withClientState({ cache, defaults, resolvers, typeDefs });
  return new ApolloClient({
    connectToDevTools: process.browser,
    link: ApolloLink.from([authMiddleware, stateLink, httpLink]),
    ssrMode: !process.browser,
    cache: cache
  });
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
