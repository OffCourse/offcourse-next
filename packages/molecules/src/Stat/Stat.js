import React, { memo } from "react";
import PropTypes from "prop-types";
import { Icon, Label } from "@offcourse/atoms";
import StatWrapper from "./StatWrapper";
import { directions, sizes } from "@offcourse/constants";

const { LARGE } = sizes;
const { HORIZONTAL, VERTICAL } = directions;

const Stat = ({ direction, inverse, iconName, label }) => {
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
};

Stat.propTypes = {
  direction: PropTypes.oneOf([HORIZONTAL, VERTICAL]),
  inverse: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  iconName: PropTypes.string.isRequired
};

export default memo(Stat);
