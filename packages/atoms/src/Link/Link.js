import React, { memo } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { formatTitle } from "../helpers";
import LinkWrapper from "./LinkWrapper";
import { sizes } from "@offcourse/constants";

const { SMALL, NORMAL, LARGE } = sizes;

const textProps = {
  SMALL: { textSize: 0, lineHeight: 0 },
  NORMAL: { textSize: 1, lineHeight: 2 },
  LARGE: { textSize: 2, lineHeight: 3 }
};

const Link = ({
  size,
  basic,
  active,
  disabled,
  href,
  fontFamily,
  children,
  onClick,
  color
}) => {
  let linkColor = color;

  if (disabled) {
    linkColor = "disabled";
  }
  if (active) {
    linkColor = "primary";
  }

  const { textSize, lineHeight } = textProps[size];
  return (
    <LinkWrapper
      color={linkColor}
      borderBottom={basic ? 0 : 2}
      fontFamily={fontFamily}
      onClick={!disabled ? onClick : identity}
      fontSize={textSize}
      lineHeight={lineHeight}
      href={!disabled ? href : undefined}
      disabled={disabled}
    >
      {formatTitle(children)}
    </LinkWrapper>
  );
};

Link.propTypes = {
  basic: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  size: PropTypes.oneOf([SMALL, NORMAL, LARGE])
};

Link.defaultProps = {
  disabled: false,
  type: "link",
  size: NORMAL
};

export default memo(Link);
