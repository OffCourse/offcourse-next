import React, { memo } from "react";
import PropTypes from "prop-types";
import TextWrapper from "./TextWrapper";
import { sizes } from "@offcourse/constants";

const { SMALL, NORMAL, LARGE } = sizes;

const textProps = {
  SMALL: { textSize: 0, lineHeight: 0 },
  NORMAL: { textSize: 1, lineHeight: 2 },
  LARGE: { textSize: 2, lineHeight: 3 }
};

const Text = ({ size, children, mb }) => {
  const { textSize, lineHeight } = textProps[size];
  return (
    <TextWrapper mb={mb} fontSize={textSize} lineHeight={lineHeight}>
      {children}
    </TextWrapper>
  );
};

Text.propTypes = {
  size: PropTypes.oneOf([SMALL, NORMAL, LARGE]),
  children: PropTypes.node.isRequired,
  mb: PropTypes.number
};

Text.defaultProps = {
  size: NORMAL
};

export default memo(Text);
