import React, { Component } from "react";
import PropTypes from "prop-types";
import { Item } from "@offcourse/atoms";
import { CheckItem } from "..";

export default class CheckpointItem extends Component {
  static propTypes = {
    onToggle: PropTypes.func,
    onClick: PropTypes.func,
    checkpointId: PropTypes.string,
    resourceUrl: PropTypes.string,
    completed: PropTypes.bool,
    task: PropTypes.string.isRequired,
    is: PropTypes.string
  };

  handleClick = () => {
    const { onClick, checkpointId, task } = this.props;
    return onClick({ checkpointId, task });
  };

  render() {
    const {
      onToggle,
      checkpointId,
      onClick,
      completed,
      task,
      is,
      resourceUrl
    } = this.props;
    return onToggle ? (
      <CheckItem
        is={is}
        id={checkpointId}
        onClick={this.handleClick}
        href={!onClick ? resourceUrl : null}
        checked={completed}
        onToggle={({ checked }) => onToggle({ checkpointId, checked })}
      >
        {task}
      </CheckItem>
    ) : (
      <Item
        is={is}
        onClick={this.handleClick}
        href={!onClick ? resourceUrl : null}
      >
        {task}
      </Item>
    );
  }
}
