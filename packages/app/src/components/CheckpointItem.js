import React, { Component } from "react";
import PropTypes from "prop-types";
import { Heading, Group, Text, Button } from "@offcourse/atoms";
import { ButtonGroup } from "@offcourse/molecules";

export default class CheckpointItem extends Component {
  static propTypes = {
    checkpoint: PropTypes.object,
    handlers: PropTypes.object
  };

  render() {
    const { checkpoint, goToCheckpoint, goToCollection } = this.props;
    const { resource, task } = checkpoint;
    return (
      <Group>
        <Heading onClick={goToCheckpoint}>{task}</Heading>
        {resource && (
          <Group>
            <Heading size={Heading.sizes.LARGE}>{resource.title}</Heading>
            {resource.description && <Text>{resource.description}</Text>}
            <ButtonGroup pt={6}>
              <Button size={Button.sizes.LARGE}>Complete Task</Button>
            </ButtonGroup>
          </Group>
        )}
      </Group>
    );
  }
}
