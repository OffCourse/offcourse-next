import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "ramda";
import { SearchBar, MessageGroup, NavBar, Menu } from "@offcourse/molecules";
import { variants } from "@offcourse/constants";
import { Transition, animated, interpolate } from "react-spring";

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
        style={{ zIndex: 2 }}
        onLogoClick={onLogoClick}
        messages={messages}
        onMenuButtonClick={() => closeSearchBar() && toggleSidebar()}
        onSearchButtonClick={toggleSearchBar}
        isSearchBarOpen={isSearchBarOpen}
        onSearchSubmit={onSearchSubmit}
        onSearchChange={onSearchChange}
        links={links}
        isDocked={isDocked}
      />
    );
  };

  renderSidebar = ({ opacity, x }) => {
    const { links, closeSidebar } = this.props;
    return (
      <Fragment>
        <animated.div
          style={{
            pointerEvents: "auto",
            width: "10rem",
            height: "100vh",
            background: "white",
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            zIndex: 5,
            transform: interpolate([x], x => {
              return `translate3d(${x}rem, 0, 0)`;
            })
          }}
        >
          <Menu links={links} />
        </animated.div>
        <animated.div
          onClick={closeSidebar}
          style={{
            pointerEvents: "auto",
            zIndex: 3,
            position: "fixed",
            background: "#3d3d3d",
            opacity,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          }}
        />
      </Fragment>
    );
  };

  renderSearchBar = ({ opacity, y, z }) => {
    const { onSearchSubmit, onSearchChange } = this.props;
    return (
      <animated.div
        style={{
          zIndex: -1,
          height: "2.25rem",
          opacity,
          transform: interpolate([y], y => {
            return `translate3d(0, ${y}rem, 0)`;
          })
        }}
      >
        <SearchBar
          onSearchChange={onSearchChange}
          onSearchSubmit={onSearchSubmit}
        />
      </animated.div>
    );
  };

  renderMessages = ({ opacity, y }) => {
    const { messages } = this.props;
    return (
      <animated.div
        style={{
          zIndex: -1,
          opacity,
          transform: interpolate([y], y => {
            return `translate3d(0, ${y}rem, 0)`;
          })
        }}
      >
        <MessageGroup messages={messages} />
      </animated.div>
    );
  };

  handleKeyPress = e => {
    const { keyCode, ctrlKey } = e;
    const { closeSidebar, toggleSearchBar, closeSearchBar } = this.props;
    if (keyCode === 27) {
      closeSidebar() && closeSearchBar();
    }
    if (keyCode === 191 && ctrlKey) {
      toggleSearchBar();
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    const { isSidebarOpen, messages, isSearchBarOpen } = this.props;
    const searchBarHeight = 2.25;
    const hasMessages = messages && !isEmpty(messages);
    return (
      <div
        style={{
          zIndex: 100,
          pointerEvents: "none",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      >
        {this.renderNavBar()}
        <Transition
          native
          from={{ opacity: 0, x: -10 }}
          enter={{ opacity: 0.7, x: 0 }}
          leave={{ opacity: 0, x: -10 }}
        >
          {isSidebarOpen && this.renderSidebar}
        </Transition>

        <Transition
          native
          from={{ opacity: 0, y: 0 }}
          enter={{ opacity: 1, y: searchBarHeight }}
          leave={{ opacity: 0, y: 0 }}
        >
          {isSearchBarOpen && this.renderSearchBar}
        </Transition>

        <Transition
          native
          from={{ opacity: 0, y: 0 }}
          enter={{ opacity: 1, y: searchBarHeight }}
          leave={{ opacity: 0, y: 0 }}
        >
          {hasMessages && this.renderMessages}
        </Transition>
      </div>
    );
  }
}
