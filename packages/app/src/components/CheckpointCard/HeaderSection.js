import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { Checkbox, Heading, Group } from "@offcourse/atoms";

export default class HeaderSection extends Component {
  static propTypes = {
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool,
    checkable: PropTypes.bool,
    onToggle: PropTypes.func,
    onClick: PropTypes.func
  };

  static defaultProps = {
    onToggle: identity
  };

  render() {
    const { task, completed, checkable, onClick, onToggle } = this.props;
    return (
      <Group
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading onClick={onClick}>{task}</Heading>
        {checkable && (
          <Group alignItems="flex-end" ml={6}>
            <Checkbox
              size="large"
              bg={!completed ? "grayScale.1" : "white"}
              checked={completed}
              onToggle={onToggle}
            />
          </Group>
        )}
      </Group>
    );
  }
}
