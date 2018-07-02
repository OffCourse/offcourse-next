import { ApolloClient } from "apollo-boost";
import { HttpLink } from "apollo-boost";
import { ApolloLink } from "apollo-link";
import { withClientState } from "apollo-link-state";
import { InMemoryCache } from "apollo-boost";
import fetch from "isomorphic-unfetch";
import * as initData from "../graphql";

let apolloClient = null;

const httpLink = new HttpLink({
  uri: "https://api.offcourse.io/graphql"
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const accessToken = localStorage && localStorage.getItem("accessToken");
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: accessToken ? `Bearer ${accessToken}` : "GUEST"
    }
  });
  return forward(operation);
});

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

function create(initialState) {
  const cache = new InMemoryCache().restore(initialState || {});
  const stateLink = withClientState({ cache, ...initData });
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
