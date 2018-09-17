import React, { Component } from "react";
import PropTypes from "prop-types";
import { Group } from "@offcourse/atoms";

export default class Sheet extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <Group bg="white" px={["2em", "4em", "4em"]} py="2em">
        {children}
      </Group>
    );
  }
}
