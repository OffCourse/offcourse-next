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
    href: PropTypes.string,
    /** a on click callback handler */
    onClick: PropTypes.func
  };

  handleClick = event => {
    const { onClick, children } = this.props;
    if (onClick) {
      event.preventDefault();
      onClick({ tag: children });
    }
  };

  render() {
    const { children, href } = this.props;
    return (
      <TagWrapper onClick={this.handleClick} href={href}>
        <Text size="small">{formatTitle(children)}</Text>
      </TagWrapper>
    );
  }
}

export default Tag;
