import React, { Component } from "react";
import PropTypes from "prop-types";
import { Logo, Group } from "@offcourse/atoms";
import { NavBar, Menu, Sidebar as Layout } from "@offcourse/molecules";

const MenuButton = NavBar.MenuButton;

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
    /** function that triggers the sidebar to open or close */
    toggleSidebar: PropTypes.func,
    /** flag that determines whether the sidebar is open or closed */
    isSidebarOpen: PropTypes.bool,
    /** determines the position of the navbar. This is mainly for debugging...*/
    position: PropTypes.oneOf(["fixed", "absolute"])
  };

  static defaultProps = {
    isSidebarOpen: false
  };

  renderNavBar = () => {
    const { links, onLogoClick, toggleSidebar, position } = this.props;
    return (
      <NavBar
        onLogoClick={onLogoClick}
        onMenuButtonClick={toggleSidebar}
        links={links}
        position={position}
      />
    );
  };

  renderSidebar = () => {
    const { links } = this.props;
    return <Menu links={links} />;
  };

  renderMain = () => {
    const { children } = this.props;
    return <Group mt={8}>{children}</Group>;
  };

  render() {
    const { isSidebarOpen, toggleSidebar } = this.props;
    return (
      <Layout
        content={this.renderSidebar()}
        toggle={toggleSidebar}
        isOpen={isSidebarOpen}
      >
        {this.renderNavBar()}
        {this.renderMain()}
      </Layout>
    );
  }
}
