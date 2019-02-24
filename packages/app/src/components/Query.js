import React from "react";
import { Query as ApolloQuery } from "react-apollo";
import { identity } from "ramda";
import { Loading } from "@offcourse/molecules";

const Query = ({ children = identity, query, variables }) => {
  return (
    <ApolloQuery query={query} variables={variables}>
      {({ loading, error, ...rest }) => {
        if (loading) {
          return children({ loading });
        }
        if (error) {
          console.log(query, error);
          return <Loading />;
        }
        return children({ ...rest });
      }}
    </ApolloQuery>
  );
};

export default Query;
