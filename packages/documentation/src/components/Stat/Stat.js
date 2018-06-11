import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon, Label } from "@offcourse/atoms";
import StatWrapper from "./StatWrapper";

export default class Stat extends Component {
  static propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    iconName: PropTypes.string.isRequired
  };

  render() {
    const { inverse, iconName, label } = this.props;
    const iconColor = inverse ? "black" : "black";
    const labelColor = inverse ? "black" : "black";
    return (
      <StatWrapper
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Icon color={iconColor} name={iconName} />
        <Label color={labelColor} pt={2}>{`${label}`}</Label>
      </StatWrapper>
    );
  }
}
