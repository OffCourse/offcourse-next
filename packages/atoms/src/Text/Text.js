import React, { Component } from "react";
import PropTypes from "prop-types";
import TextWrapper from "./TextWrapper";

class Text extends Component {
  static propTypes = {
    /** Field that indicates the size of the text */
    size: PropTypes.oneOf(["small", "regular"]),
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    size: "regular"
  };

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

export default Text;
