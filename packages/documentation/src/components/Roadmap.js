import React, { Component } from "react";
import PropTypes from "prop-types";
import { Masonry } from "@offcourse/atoms";
import FeatureCard from "./FeatureCard";

export default class Roadmap extends Component {
  static propTypes = {
    items: PropTypes.array
  };

  render() {
    const sizes = [
      { columns: 1, gutter: 0 },
      { mq: "600px", columns: 2, gutter: 16 },
      { mq: "1200px", columns: 3, gutter: 16 }
    ];
    const { items } = this.props;

    return (
      <Masonry sizes={sizes}>
        {({ forcePack }) =>
          items.map(item => <FeatureCard key={item.name} {...item} />)
        }
      </Masonry>
    );
  }
}
