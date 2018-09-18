import React, { Component } from "react";
import PropTypes from "prop-types";
import { Heading, Group, Text } from "@offcourse/atoms";
import { TagGroup } from "@offcourse/molecules";

export default class CheckpointItem extends Component {
  static propTypes = {
    checkpoint: PropTypes.object,
    handlers: PropTypes.object
  };

  render() {
    const { checkpoint, goToCheckpoint, goToCollection } = this.props;
    const { resource, task } = checkpoint;
    return (
      <Group mb="1em">
        <Heading onClick={goToCheckpoint}>{task}</Heading>
        {resource && (
          <Group>
            <Heading size="large">{resource.title}</Heading>
            <Text>{resource.description}</Text>
            <TagGroup
              onClick={goToCollection}
              flex={1}
              direction="both"
              section="tags"
              tags={resource.tags}
            />
          </Group>
        )}
      </Group>
    );
  }
}
