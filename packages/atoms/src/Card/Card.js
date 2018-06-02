import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import { Section } from "..";
import CardWrapper from "./CardWrapper";

export default class Card extends Component {
  static propTypes = {};
  renderSections() {
    const { children } = this.props;
    return Children.map(children, (child, index) => {
      return <Section>{child}</Section>;
    });
  }
  render() {
    const { children } = this.props;
    return <CardWrapper>{this.renderSections()}</CardWrapper>;
  }
}
