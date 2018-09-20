import React, { Component } from "react";
import PropTypes from "prop-types";
import { CheckpointProvider } from "../providers";
import { CheckpointItem, ResourceItem } from "../components";
import { Card, Link } from "@offcourse/atoms";

export default class CheckpointContainer extends Component {
  static propTypes = {
    match: PropTypes.object,
    handlers: PropTypes.object
  };

  render() {
    const { match, handlers } = this.props;
    const { curator, goal, task } = match.params;
    const checkpointQuery = { curator, goal, task };
    const { goToCourse } = handlers;
    return (
      <CheckpointProvider checkpointQuery={checkpointQuery}>
        {({ checkpoint }) => {
          return (
            <Card pt={6} mb={8} width="100%">
              <Link
                onClick={() => goToCourse({ curator, goal })}
              >{`<< ${goal}`}</Link>
              <CheckpointItem handlers={handlers} checkpoint={checkpoint} />
              <ResourceItem
                handlers={handlers}
                resource={checkpoint.resource}
              />
            </Card>
          );
        }}
      </CheckpointProvider>
    );
  }
}
