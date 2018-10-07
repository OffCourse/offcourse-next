import React, { Component } from "react";
import PropTypes from "prop-types";
import BarWrapper from "./BarWrapper";

export default class Bar extends Component {
  static Wrapper = Bar.Wrapper;
  static propTypes = {
    docked: PropTypes.oneOf(["top", "bottom"]),
    children: PropTypes.node.isRequired,
    position: PropTypes.oneOf(["fixed", "absolute"])
  };

  static defaultProps = {
    docked: "top",
    position: "fixed"
  };

  render() {
    const { docked, children, position } = this.props;
    return (
      <BarWrapper
        top={docked === "top" ? 0 : null}
        bottom={docked === "bottom" ? 0 : null}
        position={position}
      >
        {children}
      </BarWrapper>
    );
  }
}
