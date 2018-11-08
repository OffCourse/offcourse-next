import React, { memo } from "react";
import PropTypes from "prop-types";
import { formatTitle } from "../helpers";
import { Text } from "..";
import TagWrapper from "./TagWrapper";
import { sizes } from "@offcourse/constants";

const { SMALL } = sizes;

const Tag = ({ onClick, children, href }) => {
  const handleClick = event => {
    if (onClick) {
      event.preventDefault();
      onClick({ tag: children });
    }
  };

  return (
    <TagWrapper onClick={handleClick} href={href}>
      <Text size={SMALL}>{formatTitle(children)}</Text>
    </TagWrapper>
  );
};

Tag.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func
};

export default memo(Tag);
