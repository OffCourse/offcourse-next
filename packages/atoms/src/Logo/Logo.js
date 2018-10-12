import React, { Component } from "react";
import PropTypes from "prop-types";
import LogoWrapper from "./LogoWrapper";
import { sizes } from "@offcourse/constants";

const { SMALL, NORMAL, LARGE, EXTRA_LARGE } = sizes;
/**
 * The logo component for the Offcourse project
 */
const multiplier = {
  [SMALL]: 2,
  [NORMAL]: 4,
  [LARGE]: 6,
  [EXTRA_LARGE]: 8
};

class Logo extends Component {
  static propTypes = {
    size: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    size: SMALL
  };

  render() {
    const { size, onClick } = this.props;
    return <LogoWrapper onClick={onClick} multiply={multiplier[size]} />;
  }
}

export default Logo;
