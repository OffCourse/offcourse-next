import React, { Component } from "react";
import PropTypes from "prop-types";
import { lowerCase } from "../helpers";
import AvatarWrapper from "./AvatarWrapper";

/**
 * A Component for the Offcourse Project that shows the avatar image of a
 * given user
 */

class Avatar extends Component {
  static propTypes = {
    /**  url that refers to an avatar image */
    url: PropTypes.string,
    /** name of the person corresponding to this avatar */
    name: PropTypes.string.isRequired
  };

  static defaultProps = {
    url: "https://assets.offcourse.io/portraits/offcourse_2.jpg"
  };

  render() {
    const { url, name } = this.props;
    return <AvatarWrapper src={url} alt={`avatar of ${lowerCase(name)}`} />;
  }
}

export default Avatar;
