import React, { Component } from "react";
import PropTypes from "prop-types";
import { Bar, Logo, Group } from "@offcourse/atoms";
import { Menu, MessageGroup } from "..";

export default class NavBar extends Component {
  static Logo = Logo;

  static propTypes = {
    /** function that is invoked when the logo is clicked */
    onLogoClick: PropTypes.func,
    /** function that is invoked when the menu button is clicked */
    onMenuButtonClick: PropTypes.func,
    /** array of objects that define the links in the menu */
    links: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        level: PropTypes.number.isRequired,
        onClick: PropTypes.func,
        href: PropTypes.string
      })
    ),
    /** array of objects that the messages in the bar */
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        message: PropTypes.string.isRequired,
        variant: PropTypes.oneOf([
          "default",
          "error",
          "info",
          "success",
          "warning"
        ])
      })
    ),
    /** determines the position of the navbar. This is mainly for debugging...*/
    position: PropTypes.oneOf(["fixed", "absolute"])
  };

  static defaultProps = {
    onLogoClick: () => {},
    onMenuClick: () => {}
  };

  render() {
    const {
      links,
      onLogoClick,
      messages,
      onMenuButtonClick,
      position
    } = this.props;
    return (
      <Bar position={position}>
        <Group
          flexDirection="row"
          alignItems="space-between"
          justifyContent="center"
          pr={4}
          height="2rem"
        >
          <Logo onClick={onLogoClick} />
          <Menu
            display={["none", "flex", "flex"]}
            justifyContent="flex-end"
            px={6}
            pb={2}
            maxLevel={0}
            direction="horizontal"
            links={links}
          />
          <Menu.Button onClick={onMenuButtonClick} />
        </Group>
        <MessageGroup messages={messages} />
      </Bar>
    );
  }
}
