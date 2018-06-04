import React, { Component } from "react";
import PropTypes from "prop-types";
import { Item } from "@offcourse/atoms";
import { CheckItem } from "..";

export default class CheckpointItem extends Component {
  static propTypes = {};

  render() {
    const {
      onToggle,
      trackable,
      checkpointId,
      completed,
      task,
      is,
      resourceUrl
    } = this.props;
    return onToggle ? (
      <CheckItem
        is={is}
        id={checkpointId}
        href={resourceUrl}
        checked={completed}
        onToggle={({ checked }) => onToggle({ checkpointId, checked })}
      >
        {task}
      </CheckItem>
    ) : (
      <Item is={is} href={resourceUrl}>
        {task}
      </Item>
    );
  }
}
