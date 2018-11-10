import React, { Component } from "react";
import PropTypes from "prop-types";
import { Avatar, Pulse } from "@offcourse/atoms";
import { sizes } from "@offcourse/constants";

const { SMALL, NORMAL, LARGE, EXTRA_LARGE } = sizes;

class Loading extends Component {
  render() {
    const { size } = this.props;
    return (
      <Pulse>
        <Avatar size={size} />
      </Pulse>
    );
  }
}

Loading.propTypes = {
  size: PropTypes.oneOf([SMALL, NORMAL, LARGE, EXTRA_LARGE])
};

export default Loading;
