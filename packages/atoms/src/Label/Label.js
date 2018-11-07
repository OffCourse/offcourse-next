import React, { memo } from "react";
import PropTypes from "prop-types";
import { formatTitle } from "../helpers";
import LabelWrapper from "./LabelWrapper";

const Label = ({ color, children, px, pt, pb, is }) => {
  const label = formatTitle(children);
  return (
    <LabelWrapper color={color} is={is} pt={pt} pb={pb} px={px}>
      {label}
    </LabelWrapper>
  );
};

Label.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  px: PropTypes.number,
  pt: PropTypes.number,
  pb: PropTypes.number,
  is: PropTypes.string
};

export default memo(Label);
