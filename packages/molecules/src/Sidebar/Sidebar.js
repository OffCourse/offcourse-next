import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactSidebar from "react-sidebar";
import { Section, Icon, Heading, Group } from "@offcourse/atoms";
import styles from "./styles";

export default class Sidebar extends Component {
  static MenuButton = ({ onClick, isOpen }) => {
    return <Icon name="hamburger" onClick={onClick} />;
  };

  static CloseButton = ({ onClick, isOpen }) => {
    return <Icon name="remove" size="small" onClick={onClick} />;
  };

  static propTypes = {
    toggle: PropTypes.func,
    content: PropTypes.element.isRequired,
    isOpen: PropTypes.bool
  };

  static defaultProps = {
    isOpen: false
  };

  render() {
    const { toggle, content, children, isOpen } = this.props;
    return (
      <ReactSidebar
        shadow={false}
        styles={styles}
        sidebar={content}
        open={isOpen}
        onSetOpen={toggle}
      >
        {children}
      </ReactSidebar>
    );
  }
}
