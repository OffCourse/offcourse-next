import React, { Component } from "react";
import PropTypes from "prop-types";
import { Heading, Group, Icon } from "@offcourse/atoms";

export default class Header extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    icon: PropTypes.node,
    onClick: PropTypes.func
  };

  static Icon = Icon;

  render() {
    const { icon, children, onClick, bg, p } = this.props;
    return (
      <Group
        bg={bg}
        p={p}
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Heading onClick={onClick}>{children}</Heading>
        {icon && (
          <Group alignItems="flex-end" ml={6}>
            {icon}
          </Group>
        )}
      </Group>
    );
  }
}
