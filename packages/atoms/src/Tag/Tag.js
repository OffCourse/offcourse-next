import React, { Component } from "react";
import PropTypes from "prop-types";
import { formatTitle } from "../helpers";
import { Text } from "..";
import TagWrapper from "./TagWrapper";

/**
 * The Tag component for the Offcourse project
 */

class Tag extends Component {
  static propTypes = {
    /** the text that is displayed on the tag */
    children: PropTypes.string.isRequired,
    /** a url that the tag links to */
    href: PropTypes.string
  };

  render() {
    return (
      <TagWrapper href={this.props.href}>
        <Text size="small">{formatTitle(this.props.children)}</Text>
      </TagWrapper>
    );
  }
}

export default Tag;
