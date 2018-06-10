import React, { Component } from "react";
import { Group } from "@offcourse/atoms";
import Stat from "./Stat";

const COMPLETE = "COMPLETE";
const AVAILABLE = "AVAILABLE";
const IN_PROGRESS = "IN PROGRESS";

const statusIcons = {
  [IN_PROGRESS]: "rocket",
  [COMPLETE]: "checkmark",
  [AVAILABLE]: "add"
};

export default class Status extends Component {
  render() {
    const { inverse, due, duration, status } = this.props;
    const statusIcon = statusIcons[status];
    return (
      <Group flexDirection="row" section="time">
        <Stat inverse={inverse} iconName={statusIcon} label={status} />
        <Stat inverse={inverse} iconName="calendar" label={due} />
        <Stat inverse={inverse} iconName="clock" label={duration} />
      </Group>
    );
  }
}
