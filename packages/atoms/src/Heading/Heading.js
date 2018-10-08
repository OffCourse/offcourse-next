import React, { Component } from "react";
import { formatTitle } from "../helpers";
import PropTypes from "prop-types";
import HeadingWrapper from "./HeadingWrapper";
import { sizes } from "@offcourse/constants";

const { SMALL, NORMAL, LARGE } = sizes;

const textProps = {
  SMALL: { fontSize: 2, lineHeight: 1 },
  NORMAL: { fontSize: 3, lineHeight: 2 },
  LARGE: { fontSize: 4, lineHeight: 5 }
};

/**
 * Heading Component for the Offcourse Project
 */

class Heading extends Component {
  static propTypes = {
    /** The actual text of the header */
    children: PropTypes.string.isRequired,
    /** Field that indicates the size of the header */
    size: PropTypes.oneOf([SMALL, NORMAL, LARGE]),
    /** Headings can optionally link to other documents, etc */
    href: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    size: NORMAL
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
    const { fontSize, lineHeight } = textProps[size];
    return (
      <HeadingWrapper
        is={href ? "a" : "h1"}
        onClick={onClick && this.handleClick}
        href={href}
        lineHeight={lineHeight}
        fontSize={fontSize}
      >
        {formatTitle(children)}
      </HeadingWrapper>
    );
  }
}

export default Heading;
