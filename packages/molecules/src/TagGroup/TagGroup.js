import React, { Component } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "ramda";
import { mapIndexed } from "../helpers";
import { Tag } from "@offcourse/atoms";
import TagGroupWrapper from "./TagGroupWrapper";

export default class TagGroup extends Component {
  static Tag = Tag;

  static propTypes = {
    tags: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.object
    ]).isRequired,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  };

  static defaultProps = {
    tags: [],
    justifyContent: "flex-start"
  };

  renderTags = () => {
    const { tags, onClick } = this.props;
    return mapIndexed(
      (text, index) => (
        <Tag onClick={onClick} key={index}>
          {text}
        </Tag>
      ),
      tags
    );
  };

  render() {
    const { tags, pt, pb, children, alignSelf } = this.props;
    return (
      <TagGroupWrapper alignSelf={alignSelf} pb={pb} pt={pt}>
        {isEmpty(tags) ? children : this.renderTags()}
      </TagGroupWrapper>
    );
  }
}
