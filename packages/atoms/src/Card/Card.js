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
      const { inverse, pb, px, ...rest } = child.props;
      const el = React.cloneElement(child, { ...rest, px: 0 });
      return (
        <Section
          pb={pb}
          pr={px || px === 0 || padding.px}
          pl={px || px === 0 || padding.px}
          bg={inverse ? "grayScale.3" : "white"}
        >
          {el}
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
