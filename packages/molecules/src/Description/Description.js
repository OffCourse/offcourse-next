import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, Label } from "@offcourse/atoms";
import DescriptionWrapper from "./DescriptionWrapper";

class Description extends Component {
  static Label = Label;
  static Text = Text;

  render() {
    const { children, label } = this.props;
    if (label) {
      return (
        <DescriptionWrapper>
          <Label>{label}</Label>
          <Text>{children}</Text>
        </DescriptionWrapper>
      );
    }
    return <DescriptionWrapper>{children} </DescriptionWrapper>;
  }
}

Description.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
  label: PropTypes.string
};

export default Description;
