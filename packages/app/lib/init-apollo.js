import { ApolloClient } from "apollo-boost";
import { HttpLink } from "apollo-boost";
import { ApolloLink, concat } from "apollo-link";
import { InMemoryCache } from "apollo-boost";
import fetch from "isomorphic-unfetch";

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

function create(initialState) {
  return new ApolloClient({
    connectToDevTools: process.browser,
    link: concat(authMiddleware, httpLink),
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    cache: new InMemoryCache().restore(initialState || {})
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
