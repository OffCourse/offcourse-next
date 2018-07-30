import React, { Component } from "react";
import PropTypes from "prop-types";
import { formatTitle } from "../helpers";
import LinkWrapper from "./LinkWrapper";

/**
 * The link component for the Offcourse project
 */

class Link extends Component {

  static propTypes = {
    /** determines if the link should only have basic styling*/
    basic: PropTypes.bool,
    /** determines if the link is in an active state*/
    active: PropTypes.bool,
    /** determines if the link should be disabled */
    disabled: PropTypes.bool,
    /** the text that is displayed on the link */
    children: PropTypes.string,
    /** code that the link should execute when clicked */
    onClick: PropTypes.func,
    /** a url that the link should link to, automatically turns the link into the basic type */
    href: PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    type: "link"
  };

  color() {
    const { active, disabled, color } = this.props;
    if (disabled) {
      return "disabled";
    }
    if (active) {
      return "primary";
    }
    return color;
  }

  render() {
    const { basic, href, children, onClick, disabled } = this.props;
    return (
      <LinkWrapper
        color={this.color()}
        borderBottom={basic ? 0 : 2}
        onClick={!disabled ? onClick : () => { }}
        href={!disabled ? href : undefined}
        disabled={disabled}
      >
        {formatTitle(children)}
      </LinkWrapper>
    );
  }
}


export default Link;
