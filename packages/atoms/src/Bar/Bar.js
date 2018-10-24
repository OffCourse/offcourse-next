import React, { Component } from "react";
import PropTypes from "prop-types";
import BarWrapper from "./BarWrapper";
import { positions } from "@offcourse/constants";

const { BOTTOM, TOP } = positions;

export default class Bar extends Component {
  static Wrapper = Bar.Wrapper;
  static propTypes = {
    position: PropTypes.oneOf([TOP, BOTTOM]),
    children: PropTypes.node.isRequired,
    isDocked: PropTypes.bool
  };

  static defaultProps = {
    isDocked: true,
    position: TOP
  };

  render() {
    const { position, className, children, isDocked } = this.props;
    return (
      <BarWrapper
        className={className}
        top={position === TOP ? 0 : null}
        bottom={position === BOTTOM ? 0 : null}
        position={isDocked ? "fixed" : "absolute"}
      >
        {children}
      </BarWrapper>
    );
  }
}
