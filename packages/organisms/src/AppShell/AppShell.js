import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { identity, isEmpty } from "ramda";
import { Backdrop } from "@offcourse/atoms";
import { SearchBar, MessageGroup, NavBar, Menu } from "@offcourse/molecules";
import { variants } from "@offcourse/constants";

const { DEFAULT, INFO, POSITIVE, WARNING, NEGATIVE } = variants;
export default class AppShell extends Component {
  static propTypes = {
    links: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        level: PropTypes.number.isRequired,
        onClick: PropTypes.func,
        href: PropTypes.string
      })
    ),
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
    toggleSearchBar: PropTypes.func,
    closeSidebar: PropTypes.func,
    closeSearchBar: PropTypes.func,
    isSidebarOpen: PropTypes.bool,
    isSearchBarOpen: PropTypes.bool,
    isDocked: PropTypes.bool
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
      closeSearchBar,
      toggleSidebar,
      toggleSearchBar,
      isSearchBarOpen,
      isDocked
    } = this.props;
    return (
      <NavBar
        style={{ zIndex: 200 }}
        onLogoClick={onLogoClick}
        messages={messages}
        onMenuButtonClick={() => {
          closeSearchBar();
          toggleSidebar();
        }}
        onSearchButtonClick={toggleSearchBar}
        isSearchBarOpen={isSearchBarOpen}
        onSearchSubmit={onSearchSubmit}
        onSearchChange={onSearchChange}
        links={links}
        isDocked={isDocked}
      />
    );
  };

  renderSidebar = ({ x }) => {
    const { links } = this.props;
    return <Menu links={links} />;
  };

  renderSearchBar = ({ opacity, y, z }) => {
    const { onSearchSubmit, onSearchChange } = this.props;
    return (
      <SearchBar
        onSearchChange={onSearchChange}
        onSearchSubmit={onSearchSubmit}
      />
    );
  };

  renderMessages = ({ opacity, y }) => {
    const { messages } = this.props;
    return <MessageGroup messages={messages} />;
  };

  render() {
    const { isSidebarOpen, messages, toggleSidebar } = this.props;
    const hasMessages = messages && !isEmpty(messages);
    return (
      <div>
        {isSidebarOpen && <Backdrop onClick={toggleSidebar} />}
        <div
          style={{
            zIndex: 100,
            pointerEvents: "none",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        >
          {this.renderNavBar()}
          {isSidebarOpen && this.renderSidebar()}
          {hasMessages && this.renderMessages()}
        </div>
      </div>
    );
  }
}
