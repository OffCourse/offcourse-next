import React, { Component } from "react";
import { Group, Icon, Text } from "@offcourse/atoms";

export default class Status extends Component {
  render() {
    const { due, duration, completed, status } = this.props;
    return (
      <Group flexDirection="row" section="time">
        <Group
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Icon color={completed ? "primary" : "lightGray"} name="checkmark" />
          <Text>{status}</Text>
        </Group>
        <Group
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Icon name="clock" />
          <Text>{duration}h</Text>
        </Group>
        <Group
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Icon name="calendar" />
          <Text>{due}</Text>
        </Group>
      </Group>
    );
  }
}
