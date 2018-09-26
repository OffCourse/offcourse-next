import React, { Component } from "react";
import PropTypes from "prop-types";
import { Query } from "../../components";
import { queries } from "./graphql";
import { check } from "graphql-anywhere";

export default class CheckpointProvider extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    checkpointQuery: PropTypes.shape({
      goal: PropTypes.string.isRequired,
      curator: PropTypes.string.isRequired,
      task: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    const { children, checkpointQuery } = this.props;
    return (
      <Query query={queries.checkpoint} variables={{ checkpointQuery }}>
        {({ data }) => {
          const { checkpoint } = data;
          return children({ checkpoint });
        }}
      </Query>
    );
  }
}
