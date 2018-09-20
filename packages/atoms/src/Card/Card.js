import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { Section } from "..";
import CardWrapper from "./CardWrapper";

export default class Card extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  renderSections() {
    const { children, p, px, py, pt, pb, pl, pr } = this.props;
    return Children.map(children, (child, index) => {
      if (!child) {
        return null;
      }
      const { inverse } = child.props;
      return (
        <Section
          p={p}
          px={px}
          py={py}
          pt={pt}
          pb={pb}
          pl={pl}
          pr={pr}
          bg={inverse ? "grayScale.3" : "white"}
        >
          {child}
        </Section>
      );
    });
  }

  render() {
    const rest = omit(
      ["p", "px", "py", "pt", "pb", "pl", "pr", "children"],
      this.props
    );
    return <CardWrapper {...rest}>{this.renderSections()}</CardWrapper>;
  }
}
