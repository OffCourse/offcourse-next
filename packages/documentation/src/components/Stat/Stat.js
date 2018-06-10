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
    const iconColor = inverse ? "white" : "black";
    const labelColor = inverse ? "white" : "black";
    return (
      <StatWrapper
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Icon color={iconColor} name={iconName} />
        <Label color={labelColor} pt={4}>{`${label}`}</Label>
      </StatWrapper>
    );
  }
}
