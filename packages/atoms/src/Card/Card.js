import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { Section } from "..";
import CardWrapper from "./CardWrapper";

export default class Card extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    inactive: PropTypes.bool
  };

  renderSections() {
    const { children, px, pl, pr } = this.props;
    const padding = { px, pl, pr };
    return Children.map(children, (child, index) => {
      if (!child) {
        return null;
      }
      const { inverse } = child.props;
      return (
        <Section {...padding} bg={inverse ? "grayScale.3" : "white"}>
          {child}
        </Section>
      );
    });
  }

  render() {
    const { inactive, pt } = this.props;
    const rest = omit(["inactive", "px", "pl", "pr", "children"], this.props);
    return (
      <CardWrapper pt={pt} opacity={inactive ? 0.5 : 1} {...rest}>
        {this.renderSections()}
      </CardWrapper>
    );
  }
}
