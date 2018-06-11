import React, { Component } from "react";
import PropTypes from "prop-types";
import { times, map, identity } from "ramda";
import { Masonry } from "@offcourse/atoms";
import FeatureCard from "./FeatureCard";

export default class Roadmap extends Component {
  static propTypes = {
    items: PropTypes.array
  };

  render() {
    const gutter = 16;
    const sizes = times(identity, 100).map(columns => {
      const mq = `${(columns > 2 ? columns + 1 : columns) * 288 +
        (columns - 1) * 16}px`;
      return {
        columns,
        mq,
        gutter
      };
    });
    const { items } = this.props;

    return (
      <Masonry sizes={sizes}>
        {({ forcePack }) =>
          map(item => <FeatureCard key={item.name} {...item} />, items)
        }
      </Masonry>
    );
  }
}
