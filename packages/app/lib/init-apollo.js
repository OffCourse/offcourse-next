import { ApolloClient } from "apollo-boost";
import { HttpLink } from "apollo-boost";
import { from } from "apollo-link";
import { setContext } from "apollo-link-context";
import { withClientState } from "apollo-link-state";
import { InMemoryCache, defaultDataIdFromObject } from "apollo-boost";
import fetch from "isomorphic-unfetch";
import cognito from "../Cognito";
import * as initData from "../graphql";

let apolloClient = null;

const httpLink = new HttpLink({
  uri: "https://api.offcourse.io/graphql"
});

const authMiddleware = setContext(async () => {
  let authorization = "GUEST";
  if (process.browser) {
    const { accessToken } = await cognito.currentUser();
    if (accessToken) {
      authorization = `Bearer ${accessToken}`;
    }
  }
  return {
    headers: {
      authorization
    }
  };
});

if (!process.browser) {
  global.fetch = fetch;
}

const create = initialState => {
  const cache = new InMemoryCache({
    dataIdFromObject: object => {
      switch (object.__typename) {
        case "Course":
          return object.courseId;
        default:
          return defaultDataIdFromObject(object); // fall back to default handling
      }
    }
  }).restore(initialState || {});
  const stateLink = withClientState({ cache, ...initData });
  return new ApolloClient({
    connectToDevTools: process.browser,
    link: from([authMiddleware, stateLink, httpLink]),
    ssrMode: !process.browser,
    cache: cache
  });
};

export default function initApollo(initialState) {
  if (!process.browser) {
    return create(initialState);
  }

  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
