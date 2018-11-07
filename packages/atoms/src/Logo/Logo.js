import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import LogoWrapper from "./LogoWrapper";
import { sizes } from "@offcourse/constants";

const { SMALL, NORMAL, LARGE, EXTRA_LARGE } = sizes;
/**
 * The logo component for the Offcourse project
 */
const multiplier = {
  [SMALL]: 2.25,
  [NORMAL]: 4,
  [LARGE]: 6,
  [EXTRA_LARGE]: 8
};

const Logo = ({ size, onClick }) => {
  return <LogoWrapper onClick={onClick} multiply={multiplier[size]} />;
};

Logo.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func
};

Logo.defaultProps = {
  size: SMALL,
  onClick: identity
};

export default Logo;
