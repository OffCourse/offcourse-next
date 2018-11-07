import React, { memo } from "react";
import PropTypes from "prop-types";
import SectionWrapper from "./SectionWrapper";

const Section = ({ children, ...rest }) => {
  return <SectionWrapper {...rest}>{children}</SectionWrapper>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired
};

export default memo(Section);
