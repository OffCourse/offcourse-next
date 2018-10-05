import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon } from "..";
import { sizes } from "@offcourse/constants";

/**
 * Icon Component for the Offcourse Project
 */

const { SMALL, NORMAL, LARGE, EXTRA_LARGE } = sizes;

class Loading extends Component {
  static sizes = sizes;
  static propTypes = {
    size: PropTypes.oneOf([SMALL, NORMAL, LARGE, EXTRA_LARGE])
  };

  render() {
    const { size } = this.props;
    return <Icon name="asterisk" size={size} spin />;
  }
}

export default Loading;
