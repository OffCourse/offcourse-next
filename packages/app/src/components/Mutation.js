import React from "react";
import { Mutation as ApolloMutation } from "react-apollo";
import { identity } from "ramda";

const Mutation = ({ children = identity, ...rest }) => {
  return (
    <ApolloMutation {...rest}>
      {(fn, { loading, error, ...rest }) => {
        return children(fn, { ...rest });
      }}
    </ApolloMutation>
  );
};

export default Mutation;
