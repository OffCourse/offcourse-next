import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { Checkbox, Heading, Group } from "@offcourse/atoms";
import { sizes } from "@offcourse/constants";

const { LARGE } = sizes;

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
        bg="grayScale.1"
        p={6}
        justifyContent="space-between"
      >
        <Heading onClick={onClick}>{task}</Heading>
        {checkable && (
          <Group alignItems="flex-end" pt={2} ml={6}>
            <Checkbox size={LARGE} checked={completed} onToggle={onToggle} />
          </Group>
        )}
      </Group>
    );
  }
}
