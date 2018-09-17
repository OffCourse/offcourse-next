import React, { Component } from "react";
import PropTypes from "prop-types";
import LogoWrapper from "./LogoWrapper";

/**
 * The logo component for the Offcourse project
 */
const sizes = {
  small: 2,
  medium: 4,
  large: 6
};

class Logo extends Component {
  static propTypes = {
    size: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    size: "small"
  };

  render() {
    const { size, onClick } = this.props;
    return <LogoWrapper onClick={onClick} multiply={sizes[size]} />;
  }
}

export default Logo;
