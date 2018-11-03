import React, { Component } from "react";
import PropTypes from "prop-types";
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
    variant: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    variant: "default",
    size: SMALL
  };

  render() {
    const { size, onClick, variant } = this.props;
    return (
      <AvatarWrapper
        variant={variant}
        onClick={onClick}
        multiply={multiplier[size]}
      />
    );
  }
}

export default Avatar;
