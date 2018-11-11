import React, { Component } from "react";
import PropTypes from "prop-types";
import { Section, Text, Label } from "@offcourse/atoms";

class Description extends Component {
  static Label = Label;
  static Text = Text;

  render() {
    const { children, label } = this.props;
    if (!children) {
      return null;
    }
    if (label) {
      return (
        <Section alignItems="flex-start" flexDirection="column">
          <Label>{label}</Label>
          <Text>{children}</Text>
        </Section>
      );
    }
    return (
      <Section alignItems="flex-start" flexDirection="column">
        {children}
      </Section>
    );
  }
}

Description.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  label: PropTypes.string
};

export default Description;
