import React, { Component } from "react";
import PropTypes from "prop-types";
import { formatTitle } from "../helpers";
import LabelWrapper from "./LabelWrapper";

class Label extends Component {
  render() {
    const { color, children, px, pt, pb, is } = this.props;
    const label = formatTitle(children);
    return (
      <LabelWrapper color={color} is={is} pt={pt} pb={pb} px={px}>
        {label}
      </LabelWrapper>
    );
  }
}

Label.propTypes = {
  /** The actual text of the label */
  children: PropTypes.string.isRequired
};

export default Label;
