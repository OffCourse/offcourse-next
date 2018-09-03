import React, { Component } from "react";
import PropTypes from "prop-types";
import { ApolloProvider } from "react-apollo";
import { defaultDataIdFromObject } from "apollo-boost";
import { setContext } from "apollo-link-context";
import { from } from "apollo-link";
import { withClientState } from "apollo-link-state";
import initData from "../graphql";
import { ApolloClient } from "apollo-client";
import {
  IntrospectionFragmentMatcher,
  InMemoryCache
} from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import introspectionQueryResultData from "../../fragmentTypes.json";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

// this should not be here...
import cognito from "../Cognito";

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

const cache = new InMemoryCache({
  fragmentMatcher,
  dataIdFromObject: object => {
    switch (object.__typename) {
      case "Course":
        return object.courseId;
      default:
        return defaultDataIdFromObject(object); // fall back to default handling
    }
  }
});

const stateLink = withClientState({ cache, ...initData });

const client = new ApolloClient({
  connectToDevTools: process.browser,
  link: from([errorLink, authMiddleware, stateLink, httpLink]),
  cache: cache
});

export default class GraphQLProvider extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  componentDidMount = async () => {
    const { initAuth } = initData.mutations;
    await client.mutate({ mutation: initAuth });
  };

  render() {
    const { children } = this.props;
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
  }
}
