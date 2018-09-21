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
    const { children, p, px, py, pt, pb, pl, pr } = this.props;
    const padding = { p, px, py, pt, pb, pl, pr };
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
    const { inactive } = this.props;
    const rest = omit(
      ["inactive", "p", "px", "py", "pt", "pb", "pl", "pr", "children"],
      this.props
    );
    return (
      <CardWrapper opacity={inactive ? 0.5 : 1} {...rest}>
        {this.renderSections()}
      </CardWrapper>
    );
  }
}
