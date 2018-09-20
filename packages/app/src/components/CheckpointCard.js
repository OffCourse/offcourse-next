import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { Card, Checkbox, Heading, Group, Text } from "@offcourse/atoms";

export default class CheckpointCard extends Component {
  static propTypes = {
    checkpoint: PropTypes.object,
    onCheckpointClick: PropTypes.func,
    onCheckpointToggle: PropTypes.func
  };

  static defaultProps = {
    onCheckpointClick: identity,
    onCheckpointToggle: identity
  };

  render() {
    const { checkpoint, onCheckpointClick, onCheckpointToggle } = this.props;
    const { task, course, resource, completed, checkpointId } = checkpoint;
    const { courseId, goal, curator } = course;

    return (
      <Card pl={8} width="100%" opacity={completed ? 0.5 : 1} mt={6}>
        <Group
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading onClick={() => onCheckpointClick({ goal, task, curator })}>
            {task}
          </Heading>
          <Checkbox
            key={`${checkpointId}-${completed}`}
            size="large"
            bg={!completed ? "grayScale.1" : "white"}
            checked={completed}
            onToggle={({ checked }) => {
              onCheckpointToggle({
                courseId,
                checkpointId,
                goal,
                task,
                checked
              });
            }}
          />
        </Group>
        {resource &&
          resource.description && <Text>{resource.description}</Text>}
      </Card>
    );
  }
}
