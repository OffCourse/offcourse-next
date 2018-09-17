import React, { Component } from "react";
import PropTypes from "prop-types";
import { ApolloProvider } from "react-apollo";
import { from } from "apollo-link";
import { ApolloClient } from "apollo-client";
import initData from "./initData";
import cache from "./cache";
import { errorLink, authLink, stateLink, httpLink } from "./links";

const client = new ApolloClient({
  connectToDevTools: process.browser,
  link: from([errorLink, authLink, stateLink, httpLink]),
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
