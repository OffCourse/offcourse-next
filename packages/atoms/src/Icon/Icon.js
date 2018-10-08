import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "./icons";
import IconWrapper from "./IconWrapper";
import { sizes } from "@offcourse/constants";

/**
 * Icon Component for the Offcourse Project
 */

const { SMALL, NORMAL, LARGE, EXTRA_LARGE } = sizes;

const iconProps = {
  SMALL: { iconSize: "xs" },
  NORMAL: { iconSize: "1x" },
  LARGE: { iconSize: "lg" },
  EXTRA_LARGE: { iconSize: "2x" }
};

class Icon extends Component {
  static propTypes = {
    /** Name name of the icon */
    name: PropTypes.oneOf(Object.keys(icons)),
    /** Size of the icon */
    size: PropTypes.oneOf([SMALL, NORMAL, LARGE, EXTRA_LARGE]),
    /** Url that the button should link to */
    href: PropTypes.string,
    /** Indicates if the icon should be spinning */
    spin: PropTypes.bool,
    /** Callback that the button should execute when clicked */
    onClick: PropTypes.func,
    color: PropTypes.string,
    tabIndex: PropTypes.number,
    is: PropTypes.string
  };

  static defaultProps = {
    size: LARGE,
    spin: false
  };

  icon() {
    const { name } = this.props;
    return icons[name];
  }

  render() {
    const { size, color, spin, tabIndex, href, is, onClick } = this.props;
    const { iconSize } = iconProps[size];
    return (
      <IconWrapper
        is={is || (href && "a") || (onClick && "button")}
        type={(is === "button" && "button") || (onClick && "button")}
        color={color}
        tabIndex={tabIndex}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={this.icon()} size={iconSize} spin={spin} />
      </IconWrapper>
    );
  }
}

export default Icon;
