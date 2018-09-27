import React, { Component } from "react";
import PropTypes from "prop-types";
import { Query } from "../../components";
import { queries } from "./graphql";

export default class CheckpointProvider extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    userName: PropTypes.string,
    checkpointQuery: PropTypes.shape({
      goal: PropTypes.string.isRequired,
      curator: PropTypes.string.isRequired,
      task: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    const { children, userName, checkpointQuery } = this.props;
    return (
      <Query
        query={queries.checkpoint}
        variables={{ checkpointQuery, isAuthenticated: !!userName }}
      >
        {({ data }) => {
          const { checkpoint } = data;
          return children({ checkpoint });
        }}
      </Query>
    );
  }
}
