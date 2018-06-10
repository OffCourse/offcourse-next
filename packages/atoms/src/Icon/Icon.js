import React, { Component } from "react";
import PropTypes from "prop-types";
import fontawesome from "@fortawesome/fontawesome";
import FA from "@fortawesome/react-fontawesome";
import * as icons from "./icons";
import IconWrapper from "./IconWrapper";

/**
 * Icon Component for the Offcourse Project
 */

class Icon extends Component {
  static propTypes = {
    /** Name name of the icon */
    name: PropTypes.oneOf(Object.keys(icons)),
    /** Size of the icon */
    size: PropTypes.oneOf(["small", "medium", "large"]),
    /** Url that the button should link to */
    href: PropTypes.string,
    /** Indicates if the icon should be spinning */
    spin: PropTypes.bool,
    /** Callback that the button should execute when clicked */
    onClick: PropTypes.func
  };

  static defaultProps = {
    size: "medium",
    spin: false
  };

  static sizes = {
    small: "xs",
    medium: "lg",
    large: "2x"
  };

  icon() {
    const { name } = this.props;
    return icons[name];
  }

  render() {
    const { size, color, spin, tabIndex, name, href, is, onClick } = this.props;
    return (
      <IconWrapper
        is={is || (href && "a") || (onClick && "button")}
        type={(is === "button" && "button") || (onClick && "button")}
        color={color}
        tabIndex={tabIndex}
        onClick={onClick}
      >
        <FA icon={this.icon()} size={Icon.sizes[size]} spin={spin} />
      </IconWrapper>
    );
  }
}

export default Icon;
