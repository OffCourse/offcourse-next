import React from "react";
import { Checkbox, Icon } from "@offcourse/atoms";
import { affordances, sizes } from "@offcourse/constants";

const { LARGE } = sizes;
const { NONE, CLOSEABLE, CHECKABLE, EXPANDABLE, SHRINKABLE } = affordances;

const Checkable = ({ checked, onClick }) => {
  return (
    <Checkbox
      size={LARGE}
      bg={["white", "grayScale.1", "grayScale.1"]}
      checked={true}
      onToggle={onClick}
    />
  );
};

const Expandable = ({ onClick }) => {
  return (
    <Icon onClick={onClick} size={LARGE} color="grayScale.2" name="arrowDown" />
  );
};

const Shrinkable = ({ onClick }) => {
  return (
    <Icon onClick={onClick} size={LARGE} color="grayScale.2" name="arrowUp" />
  );
};

const Closeable = ({ onClick }) => {
  return (
    <Icon onClick={onClick} size={LARGE} color="grayScale.2" name="remove" />
  );
};

export default {
  [NONE]: null,
  [CLOSEABLE]: Closeable,
  [CHECKABLE]: Checkable,
  [EXPANDABLE]: Expandable,
  [SHRINKABLE]: Shrinkable
};
