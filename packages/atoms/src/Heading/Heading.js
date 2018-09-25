import React, { Component } from "react";
import { formatTitle } from "../helpers";
import PropTypes from "prop-types";
import HeadingWrapper from "./HeadingWrapper";

/**
 * Heading Component for the Offcourse Project
 */

const lineHeights = {
  small: 1,
  normal: 2,
  large: 5
};

const fontSizes = {
  small: 2,
  normal: 3,
  large: 4
};

class Heading extends Component {
  static propTypes = {
    /** The actual text of the header */
    children: PropTypes.string.isRequired,
    /** Field that indicates the size of the header */
    size: PropTypes.oneOf(["small", "normal", "large"]),
    /** Headings can optionally link to other documents, etc */
    href: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    size: "normal"
  };

  handleClick = event => {
    const { onClick, href } = this.props;
    if (onClick) {
      event.preventDefault();
      onClick({ href });
    }
  };

  render() {
    const { children, onClick, href, size } = this.props;
    return (
      <HeadingWrapper
        is={href ? "a" : "h1"}
        onClick={onClick && this.handleClick}
        href={href}
        lineHeight={lineHeights[size]}
        fontSize={fontSizes[size]}
      >
        {formatTitle(children)}
      </HeadingWrapper>
    );
  }
}

export default Heading;
