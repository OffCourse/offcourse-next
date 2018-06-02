import React, { Component } from "react";
import PropTypes from "prop-types";
import OverlayWrapper from "./OverlayWrapper";

export default class Overlay extends Component {
  static propTypes = {
    /** flag that decides if the overlay is open or closed */
    isOpen: PropTypes.bool.isRequired
  };

  static defaultProps = {
    isOpen: true,
    close: () => null
  };

  handleKeyPress = e => {
    const { keyCode } = e;
    const { close } = this.props;
    if (keyCode === 27) {
      close();
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    const { children, isOpen, close } = this.props;
    const bg = isOpen ? "rgba(61, 61, 61, 0.9)" : "rgba(61,61,61,0)";
    return (
      <OverlayWrapper bg={bg} zIndex={isOpen ? 999 : -1}>
        {children}
      </OverlayWrapper>
    );
  }
}
