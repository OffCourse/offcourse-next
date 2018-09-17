import React, { Component } from "react";
import PropTypes from "prop-types";
import SectionWrapper from "./SectionWrapper";

/**
 * Generic Section component for the Offcourse project
 */

class Section extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };
  render() {
    const { children, ...rest } = this.props;
    return <SectionWrapper {...rest}>{children}</SectionWrapper>;
  }
}

/** @component */
export default Section;
