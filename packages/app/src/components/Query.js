import React, { Component } from "react";
import { Query as ApolloQuery } from "react-apollo";
import { identity } from "ramda";
import { Loading } from "@offcourse/atoms";

export default class Query extends Component {
  render() {
    const { children = identity, query, variables } = this.props;
    return (
      <ApolloQuery query={query} variables={variables}>
        {({ loading, error, ...rest }) => {
          if (loading) return <Loading size="large" />;
          if (error) {
            console.log(query, error);
            return <Loading size="large" />;
          }
          return children({ ...rest });
        }}
      </ApolloQuery>
    );
  }
}
