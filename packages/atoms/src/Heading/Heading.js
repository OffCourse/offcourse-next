import React, { Component } from "react";
import { formatTitle } from "../helpers";
import PropTypes from "prop-types";
import HeadingWrapper from "./HeadingWrapper";

/**
 * Heading Component for the Offcourse Project
 */

class Heading extends Component {
  static propTypes = {
    /** The actual text of the header */
    children: PropTypes.string.isRequired,
    /** Field that indicates the size of the header */
    size: PropTypes.oneOf(["small", "regular"]),
    /** Headings can optionally link to other documents, etc */
    href: PropTypes.string
  };

  static defaultProps = {
    size: "regular"
  };

  render() {
    const { children, href, size } = this.props;
    return (
      <HeadingWrapper
        is={href ? "a" : "h1"}
        href={href}
        lineHeight={size === "small" ? 1 : 2}
        fontSize={size === "small" ? 2 : 3}
      >
        {formatTitle(children)}
      </HeadingWrapper>
    );
  }
}

export default Heading;
