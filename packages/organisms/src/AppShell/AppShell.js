import React, { Component } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "ramda";
import { Group } from "@offcourse/atoms";
import {
  SearchBar,
  MessageGroup,
  NavBar,
  Menu,
  Sidebar as Layout
} from "@offcourse/molecules";
import { variants } from "@offcourse/constants";
import { Transition } from "react-spring";

const { DEFAULT, INFO, POSITIVE, WARNING, NEGATIVE } = variants;
export default class AppShell extends Component {
  static propTypes = {
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
    onLogoClick: PropTypes.func,
    onSearchChange: PropTypes.func,
    onSearchSubmit: PropTypes.func,
    toggleSidebar: PropTypes.func,
    /** function that triggers the sidebar to open or close */
    toggleSearchBar: PropTypes.func,
    /** flag that determines whether the sidebar is open or closed */
    isSidebarOpen: PropTypes.bool,
    isSearchBarOpen: PropTypes.bool,
    /** determines the position of the navbar. This is mainly for debugging... */
    isDocked: PropTypes.bool,
    children: PropTypes.node
  };

  static defaultProps = {
    isSidebarOpen: false,
    isSearchbarOpen: true
  };

  renderNavBar = () => {
    const {
      links,
      onLogoClick,
      onSearchChange,
      onSearchSubmit,
      messages,
      toggleSidebar,
      toggleSearchBar,
      isSearchBarOpen,
      isDocked
    } = this.props;
    return (
      <NavBar
        onLogoClick={onLogoClick}
        messages={messages}
        onMenuButtonClick={toggleSidebar}
        onSearchButtonClick={toggleSearchBar}
        isSearchBarOpen={isSearchBarOpen}
        onSearchSubmit={onSearchSubmit}
        onSearchChange={onSearchChange}
        links={links}
        isDocked={isDocked}
      />
    );
  };

  renderSidebar = () => {
    const { links } = this.props;
    return <Menu links={links} />;
  };

  renderSearchBar = styles => {
    const { isSearchBarOpen, onSearchSubmit, onSearchChange } = this.props;
    return (
      <SearchBar
        styles={styles}
        key={isSearchBarOpen}
        onSearchSubmit={onSearchSubmit}
        onSearchChange={onSearchChange}
        isOpen={isSearchBarOpen}
      />
    );
  };

  renderMessages = styles => {
    const { messages } = this.props;
    return <MessageGroup messages={messages} />;
  };

  render() {
    const {
      isSidebarOpen,
      messages,
      isSearchBarOpen,
      toggleSidebar
    } = this.props;
    const searchBarHeight = 2.25;
    const hasMessages = messages && !isEmpty(messages);
    return (
      <div
        style={{
          pointerEvents: "none",
          zIndex: 100,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      >
        {this.renderNavBar()}
        <Transition
          from={{ opacity: 0, transform: "translateZ(0)" }}
          enter={{ opacity: 1, transform: "translateZ(1)" }}
          leave={{ opacity: 0, transform: "translateZ(0)" }}
        >
          {isSearchBarOpen && this.renderSearchBar}
        </Transition>
      </div>
    );
  }
}
