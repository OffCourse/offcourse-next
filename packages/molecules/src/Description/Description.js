import React, { Component } from "react";
import PropTypes from "prop-types";
import { Section, Text, Label } from "@offcourse/atoms";

class Description extends Component {
  static Label = Label;
  static Text = Text;

  render() {
    const { children, label } = this.props;
    if (label) {
      return (
        <Section p={0}>
          <Label>{label}</Label>
          <Text>{children}</Text>
        </Section>
      );
    }
    return <Section p={0}>{children} </Section>;
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
