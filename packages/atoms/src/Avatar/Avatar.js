import React, { Component } from "react";
import PropTypes from "prop-types";
import AvatarWrapper from "./AvatarWrapper";
import { variants, sizes, errors } from "@offcourse/constants";

const { DEFAULT } = variants;
const { SMALL, NORMAL, LARGE, EXTRA_LARGE } = sizes;
const {
  RESOURCE_NOT_LOADING,
  TOTAL_PANIC,
  NO_SEARCH_RESULTS,
  COURSE_NOT_FOUND,
  CHECKPOINT_NOT_FOUND
} = errors;
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
    size: PropTypes.oneOf([SMALL, NORMAL, LARGE, EXTRA_LARGE]),
    variant: PropTypes.oneOf([
      DEFAULT,
      RESOURCE_NOT_LOADING,
      TOTAL_PANIC,
      NO_SEARCH_RESULTS,
      COURSE_NOT_FOUND,
      CHECKPOINT_NOT_FOUND
    ]),
    onClick: PropTypes.func
  };

  static defaultProps = {
    variant: DEFAULT,
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
