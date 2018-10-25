import React, { Component } from "react";
import PropTypes from "prop-types";
import { lowerCase } from "../helpers";
import AvatarWrapper from "./AvatarWrapper";
import { sizes } from "@offcourse/constants";

const { SMALL, NORMAL, LARGE, EXTRA_LARGE } = sizes;
/**
 * A Component for the Offcourse Project that shows the avatar image of a
 * given user
 */
const multiplier = {
  [SMALL]: 3,
  [NORMAL]: 6,
  [LARGE]: 10,
  [EXTRA_LARGE]: 15
};

class Avatar extends Component {
  static propTypes = {
    size: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    size: SMALL
  };

  render() {
    const { size, onClick } = this.props;
    return <AvatarWrapper onClick={onClick} multiply={multiplier[size]} />;
  }
}

export default Avatar;
