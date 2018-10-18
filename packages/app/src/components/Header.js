import React, { Component } from "react";
import PropTypes from "prop-types";
import { Heading, Group } from "@offcourse/atoms";

export default class HeaderSection extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    icon: PropTypes.node,
    onClick: PropTypes.func
  };

  render() {
    const { icon, children, onClick } = this.props;
    return (
      <Group
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Heading onClick={onClick}>{children}</Heading>
        {icon}
      </Group>
    );
  }
}
