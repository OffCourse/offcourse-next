import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon, Label } from "@offcourse/atoms";
import StatWrapper from "./StatWrapper";
import { sizes } from "@offcourse/constants";
const { LARGE } = sizes;

export default class Stat extends Component {
  static propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    iconName: PropTypes.string.isRequired
  };

  render() {
    const { direction, inverse, iconName, label } = this.props;
    const color = inverse ? "white" : "black";
    return (
      <StatWrapper
        alignItems="center"
        justifyContent="center"
        flexDirection={direction === "horizontal" ? "row" : "column"}
      >
        <Icon size={LARGE} color={color} name={iconName} />
        <Label
          color={color}
          pt={direction === "horizontal" ? 0 : 2}
          px={direction === "horizontal" ? 4 : 0}
        >{`${label}`}</Label>
      </StatWrapper>
    );
  }
}
