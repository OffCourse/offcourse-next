import React, { memo } from "react";
import { formatTitle } from "../helpers";
import PropTypes from "prop-types";
import HeadingWrapper from "./HeadingWrapper";
import { variants, sizes } from "@offcourse/constants";

const { ACTIVE, INACTIVE } = variants;
const { SMALL, NORMAL, LARGE, EXTRA_LARGE } = sizes;

const textProps = {
  SMALL: { fontSize: 2, lineHeight: 1 },
  NORMAL: { fontSize: 3, lineHeight: 2 },
  LARGE: { fontSize: 4, lineHeight: 4 },
  EXTRA_LARGE: { fontSize: "4rem", lineHeight: "4.5rem" }
};

const Heading = ({ variant, children, onClick, href, size, mb, mt }) => {
  const handleClick = event => {
    if (onClick) {
      event.preventDefault();
      onClick({ href });
    }
  };

  const { fontSize, lineHeight } = textProps[size];
  return (
    <HeadingWrapper
      mb={mb}
      mt={mt}
      is={href ? "a" : "h1"}
      color={variant === ACTIVE ? "black" : "grayScale.2"}
      onClick={onClick && handleClick}
      href={href}
      lineHeight={lineHeight}
      fontSize={fontSize}
    >
      {formatTitle(children)}
    </HeadingWrapper>
  );
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([ACTIVE, INACTIVE]),
  size: PropTypes.oneOf([SMALL, NORMAL, LARGE, EXTRA_LARGE]),
  href: PropTypes.string,
  onClick: PropTypes.func,
  mb: PropTypes.number,
  mt: PropTypes.number
};

Heading.defaultProps = {
  size: NORMAL,
  variant: ACTIVE
};

export default memo(Heading);
