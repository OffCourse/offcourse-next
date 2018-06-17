import React, { Component } from "react";
import PropTypes from "prop-types";
import { times, map, identity } from "ramda";
import { Masonry } from "@offcourse/atoms";
import FeatureCard from "./FeatureCard";

export default class Roadmap extends Component {
  static propTypes = {
    items: PropTypes.array
  };

  calculateBreakpoints() {
    return times(identity, 100).map(columns => {
      const gutter = 16;
      const columnWidth = 288;
      const offset = columnWidth + gutter;
      const colSpace = (columns + 1) * columnWidth;
      const gutterSpace = columns * gutter;
      return colSpace + offset + gutterSpace;
    });
  }

  render() {
    const { items } = this.props;
    return (
      <Masonry breakpoints={this.calculateBreakpoints()}>
        {map(item => <FeatureCard key={item.name} {...item} />, items)}
      </Masonry>
    );
  }
}
