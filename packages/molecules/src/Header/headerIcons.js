import React from "react";
import { flatten, map } from "ramda";
import { Checkbox, Icon } from "@offcourse/atoms";
import { affordances, sizes } from "@offcourse/constants";

const { LARGE } = sizes;
const {
  NONE,
  CLOSEABLE,
  CHECKABLE,
  UNCHECKABLE,
  EXPANDABLE,
  SHRINKABLE
} = affordances;

const iconBg = rbg => {
  if (!rbg) {
    return "grayScale.1";
  }
  return map(bg => (bg === "white" ? "grayScale.1" : "white"), flatten([rbg]));
};

const Checkable = ({ onClick, parentBg }) => {
  const bg = iconBg(parentBg);
  return <Checkbox bg={bg} size={LARGE} checked={false} onToggle={onClick} />;
};

const Uncheckable = ({ onClick, parentBg }) => {
  const bg = iconBg(parentBg);
  return <Checkbox bg={bg} size={LARGE} checked={true} onToggle={onClick} />;
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
  [UNCHECKABLE]: Uncheckable,
  [EXPANDABLE]: Expandable,
  [SHRINKABLE]: Shrinkable
};
