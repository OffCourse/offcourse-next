import React, { memo } from "react";
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

const multiplier = {
  [SMALL]: 3,
  [NORMAL]: 6,
  [LARGE]: 10,
  [EXTRA_LARGE]: 15
};

const Avatar = ({ size, onClick, variant }) => {
  return (
    <AvatarWrapper
      variant={variant}
      onClick={onClick}
      multiply={multiplier[size]}
    />
  );
};

Avatar.propTypes = {
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

Avatar.defaultProps = {
  variant: DEFAULT,
  size: SMALL
};

export default memo(Avatar);
