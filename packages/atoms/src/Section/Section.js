import React, { Component } from "react";
import SectionWrapper from "./SectionWrapper";

/**
 * Generic Section component for the Offcourse project
 */

class Section extends Component {
  render() {
    const { children, ...rest } = this.props;
    return <SectionWrapper {...rest}>{children}</SectionWrapper>;
  }
}

/** @component */
export default Section;
