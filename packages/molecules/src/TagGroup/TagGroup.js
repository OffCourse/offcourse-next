import React from "react";
import PropTypes from "prop-types";
import { isEmpty, identity } from "ramda";
import { mapIndexed } from "../helpers";
import { Tag } from "@offcourse/atoms";
import TagGroupWrapper from "./TagGroupWrapper";

const TagGroup = ({ tags, onClick, children }) => {
  const augmentedTags = mapIndexed(
    (text, index) => (
      <Tag onClick={onClick} key={index}>
        {text}
      </Tag>
    ),
    tags
  );
  return (
    <TagGroupWrapper>
      {isEmpty(tags) ? children : augmentedTags}
    </TagGroupWrapper>
  );
};

TagGroup.Tag = Tag;

TagGroup.propTypes = {
  tags: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.object
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  onClick: PropTypes.func
};

TagGroup.defaultProps = {
  tags: [],
  onClick: identity
};

export default TagGroup;
