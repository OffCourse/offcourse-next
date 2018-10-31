import React, { Component } from "react";
import PropTypes from "prop-types";
import TextWrapper from "./TextWrapper";
import { sizes } from "@offcourse/constants";

const { SMALL, NORMAL, LARGE } = sizes;

const textProps = {
  SMALL: { textSize: 0, lineHeight: 0 },
  NORMAL: { textSize: 1, lineHeight: 2 },
  LARGE: { textSize: 2, lineHeight: 3 }
};
class Text extends Component {
  static sizes = sizes;
  static propTypes = {
    /** Field that indicates the size of the text */
    size: PropTypes.oneOf([SMALL, NORMAL, LARGE]),
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    size: NORMAL
  };

  render() {
    const { size, children } = this.props;
    const { textSize, lineHeight } = textProps[size];
    return (
      <TextWrapper fontSize={textSize} lineHeight={lineHeight}>
        {children}
      </TextWrapper>
    );
  }
}

export default Text;
