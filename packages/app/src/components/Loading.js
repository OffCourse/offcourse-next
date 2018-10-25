import React, { Component } from "react";
import PropTypes from "prop-types";
import { Group, Button, Heading, Text, Loading as L } from "@offcourse/atoms";
import { sizes } from "@offcourse/constants";

const { EXTRA_LARGE } = sizes;

export default class Loading extends Component {
  static propTypes = {};

  render() {
    return (
      <Group
        flexDirection={["column-reverse", "row", "row"]}
        height="calc(100vh - 2.25rem)"
        alignItems="center"
        width="100vh"
        justifyContent="center"
      >
        <L size={EXTRA_LARGE} />
      </Group>
    );
  }
}
