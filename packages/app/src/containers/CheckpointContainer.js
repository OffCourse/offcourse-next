import React, { Component } from "react";
import PropTypes from "prop-types";
import { CheckpointProvider } from "../providers";
import { Sheet, CheckpointItem, ResourceItem } from "../components";

export default class CheckpointContainer extends Component {
  static propTypes = {
    match: PropTypes.object,
    handlers: PropTypes.object
  };

  render() {
    const { match, handlers } = this.props;
    const { curator, goal, task } = match.params;
    const checkpointQuery = { curator, goal, task };
    return (
      <CheckpointProvider checkpointQuery={checkpointQuery}>
        {({ checkpoint }) => {
          return (
            <Sheet>
              <CheckpointItem handlers={handlers} checkpoint={checkpoint} />
              <ResourceItem
                handlers={handlers}
                resource={checkpoint.resource}
              />
            </Sheet>
          );
        }}
      </CheckpointProvider>
    );
  }
}
