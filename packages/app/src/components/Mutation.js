import React from "react";
import { Mutation as ApolloMutation } from "react-apollo";
import { identity } from "ramda";

export default class Mutation extends React.Component {
  render() {
    const { children = identity, ...rest } = this.props;
    return (
      <ApolloMutation {...rest}>
        {(fn, { loading, error, ...rest }) => {
          return children(fn, { ...rest });
        }}
      </ApolloMutation>
    );
  }
}
