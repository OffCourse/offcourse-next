import React, { Component } from "react";
import PropTypes from "prop-types";
import TextWrapper from "./TextWrapper";

class Text extends Component {
  render() {
    const { size, children } = this.props;
    const textSize = size === "small" ? 0 : 1;
    return (
      <TextWrapper fontSize={textSize} lineHeight={textSize}>
        {children}
      </TextWrapper>
    );
  }
}

Text.propTypes = {
  /** Field that indicates the size of the text */
  size: PropTypes.oneOf(["small", "regular"])
};

Text.defaultProps = {
  size: "regular"
};

/** @component */
export default Text;
