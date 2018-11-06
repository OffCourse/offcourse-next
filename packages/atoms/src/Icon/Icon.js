import React, { memo } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "./icons";
import IconWrapper from "./IconWrapper";
import { sizes } from "@offcourse/constants";

const { SMALL, NORMAL, LARGE, EXTRA_LARGE } = sizes;

const iconProps = {
  SMALL: { iconSize: "xs" },
  NORMAL: { iconSize: "1x" },
  LARGE: { iconSize: "lg" },
  EXTRA_LARGE: { iconSize: "2x" }
};

const Icon = ({ size, name, color, spin, tabIndex, href, is, onClick, mx }) => {
  const { iconSize } = iconProps[size];
  return (
    <IconWrapper
      is={is || (href && "a") || (onClick && "button")}
      type={(is === "button" && "button") || (onClick && "button")}
      mx={mx}
      color={color}
      tabIndex={tabIndex}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icons[name]} size={iconSize} spin={spin} />
    </IconWrapper>
  );
};

Icon.defaultProps = {
  size: NORMAL,
  spin: false
};

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(icons)),
  size: PropTypes.oneOf([SMALL, NORMAL, LARGE, EXTRA_LARGE]),
  href: PropTypes.string,
  spin: PropTypes.bool,
  onClick: PropTypes.func,
  color: PropTypes.string,
  tabIndex: PropTypes.number,
  is: PropTypes.string
};

export default memo(Icon);
