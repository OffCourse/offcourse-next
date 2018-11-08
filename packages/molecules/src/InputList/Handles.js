import React, { memo } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { IconGroup } from "..";
import { sizes, directions } from "@offcourse/constants";

const { NORMAL } = sizes;
const { VERTICAL } = directions;

const Handles = ({ remove, index }) => {
  const icons = [
    {
      is: "button",
      onClick: () => remove(index),
      name: "remove",
      tabIndex: -1
    },
    { is: "button", name: "sort", tabIndex: -1, onClick: identity }
  ];
  return (
    <IconGroup
      icons={icons}
      color="grayScale.2"
      direction={VERTICAL}
      size={NORMAL}
    />
  );
};

Handles.propTypes = {
  remove: PropTypes.func,
  index: PropTypes.number.isRequired
};

export default memo(Handles);
