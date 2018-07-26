import React, { Component, Children } from "react";
import { Section } from "..";
import CardWrapper from "./CardWrapper";

export default class Card extends Component {

  renderSections() {
    const { children } = this.props;
    return Children.map(children, (child, index) => {
      if (!child) {
        return null;
      }
      const { inverse } = child.props;
      return (
        <Section bg={inverse ? "grayScale.3" : "white"}>
          {child}
        </Section>);
    });
  }

  render() {
    return <CardWrapper>{this.renderSections()}</CardWrapper>;
  }
}
