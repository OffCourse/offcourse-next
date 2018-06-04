import React, { Component } from "react";
import PropTypes from "prop-types";
import { Bar, Logo, Icon } from "@offcourse/atoms";
import { Menu } from "..";

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
    /** determines the position of the navbar. This is mainly for debugging...*/
    position: PropTypes.oneOf(["fixed", "absolute"])
  };

  static defaultProps = {
    onLogoClick: () => {},
    onMenuClick: () => {}
  };

  render() {
    const { links, onLogoClick, onMenuButtonClick, position } = this.props;
    return (
      <Bar position={position}>
        <Logo onClick={onLogoClick} />
        <Menu
          display={["none", "flex", "flex"]}
          justifyContent="flex-end"
          px={6}
          maxLevel={2}
          direction="horizontal"
          links={links}
        />
        <Menu.Button onClick={onMenuButtonClick} />
      </Bar>
    );
  }
}
