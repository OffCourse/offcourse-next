import React, { Component } from "react";
import { identity } from "ramda";
import PropTypes from "prop-types";
import OverlayWrapper from "./OverlayWrapper";

class Overlay extends Component {
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
    const { children, isOpen } = this.props;
    const bg = isOpen ? "rgba(61, 61, 61, 0.9)" : "rgba(61,61,61,0)";
    return (
      <OverlayWrapper bg={bg} zIndex={isOpen ? 999 : -1}>
        {children}
      </OverlayWrapper>
    );
  }
}

Overlay.defaultProps = {
  isOpen: true,
  close: identity
};

Overlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default Overlay;
