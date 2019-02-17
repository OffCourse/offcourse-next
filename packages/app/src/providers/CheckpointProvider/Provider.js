import React from "react";
import { adopt } from "react-adopt";
import { AuthProvider } from "..";
import { Query } from "../../components";
import { queries } from "./graphql";

const mapper = {
  userName: ({ render }) => (
    <AuthProvider>{({ userName }) => render(userName)}</AuthProvider>
  ),
  checkpoint: ({ userName, checkpointQuery, render }) => {
    return (
      <Query
        query={queries.checkpoint}
        variables={{ checkpointQuery, isAuthenticated: !!userName }}
      >
        {({ data, loading }) => {
          if (loading) {
            return render({ loading });
          }
          const { checkpoint } = data;
          return render(checkpoint);
        }}
      </Query>
    );
  }
};

const mapProps = ({ userName, checkpoint }) => ({
  checkpoint
});

export default adopt(mapper, mapProps);
