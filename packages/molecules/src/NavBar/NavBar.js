import React, { Component } from "react";
import PropTypes from "prop-types";
import { Logo, Group } from "@offcourse/atoms";
import { Menu, MessageGroup, SearchBar, IconGroup } from "..";
import { identity } from "ramda";
import NavBarWrapper from "./NavBarWrapper";
import { variants } from "@offcourse/constants";

const { DEFAULT, INFO, POSITIVE, WARNING, NEGATIVE } = variants;

export default class NavBar extends Component {
  static Logo = Logo;

  static propTypes = {
    /** function that is invoked when the logo is clicked */
    onLogoClick: PropTypes.func,
    /** function that is invoked when the menu button is clicked */
    onMenuButtonClick: PropTypes.func,
    onSearchButtonClick: PropTypes.func,
    isSearchBarOpen: PropTypes.bool,
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
        variant: PropTypes.oneOf([DEFAULT, INFO, POSITIVE, WARNING, NEGATIVE])
      })
    ),
    /** determines the position of the navbar. This is mainly for debugging... */
    position: PropTypes.oneOf(["fixed", "absolute"])
  };

  static defaultProps = {
    onLogoClick: identity,
    onMenuClick: identity,
    onSearchButtonClick: identity
  };

  render() {
    const {
      links,
      onLogoClick,
      messages,
      isSearchBarOpen,
      onMenuButtonClick,
      onSearchChange,
      onSearchSubmit,
      onSearchButtonClick,
      position
    } = this.props;
    return (
      <NavBarWrapper isSearchBarOpen={isSearchBarOpen} position={position}>
        <Group
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
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
          <IconGroup>
            <SearchBar.Button onClick={onSearchButtonClick} />
            <Menu.Button onClick={onMenuButtonClick} />
          </IconGroup>
        </Group>
        <SearchBar
          key={isSearchBarOpen}
          onSearchSubmit={onSearchSubmit}
          onSearchChange={onSearchChange}
          isOpen={isSearchBarOpen}
        />
        <MessageGroup messages={messages} />
      </NavBarWrapper>
    );
  }
}
