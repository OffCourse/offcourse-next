import React, { Component } from "react";
import PropTypes from "prop-types";

export default class GlobalEvents extends Component {
  static propTypes = {
    closeSearchBar: PropTypes.func.isRequired,
    toggleSearchBar: PropTypes.func.isRequired,
    closeSidebar: PropTypes.func.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
    closeOverlay: PropTypes.func.isRequired
  };

  handleKeyPress = e => {
    const { keyCode, ctrlKey, altKey } = e;
    const {
      closeSidebar,
      toggleSearchBar,
      toggleSidebar,
      closeSearchBar,
      closeOverlay
    } = this.props;

    if (keyCode === 27) {
      closeSidebar() && closeSearchBar() && closeOverlay();
    }
    if (keyCode === 191 && ctrlKey) {
      toggleSearchBar();
    }
    if (keyCode === 191 && altKey) {
      toggleSidebar();
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    return null;
  }
}
