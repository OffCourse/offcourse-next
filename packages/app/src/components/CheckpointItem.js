import React, { Component } from "react";
import PropTypes from "prop-types";
import { Heading, Group } from "@offcourse/atoms";

export default class CheckpointItem extends Component {
  static propTypes = {
    checkpoint: PropTypes.object,
    handlers: PropTypes.object
  };

  render() {
    const { checkpoint, handlers } = this.props;
    const { resource, task, course } = checkpoint;
    const { goToCourse } = handlers;
    const { goal } = course;
    return (
      <Group>
        <Group mb="1em">
          <Heading>{task}</Heading>
          <div>
            <span onClick={() => goToCourse(course)}>{goal}</span>
            <span> >> </span>
            <span>{task}</span>
          </div>
        </Group>
      </Group>
    );
  }
}
