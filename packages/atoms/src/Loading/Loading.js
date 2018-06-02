import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon } from "..";

class Loading extends Component {
  render() {
    const { size } = this.props;
    return <Icon name="asterisk" size={size} spin />;
  }
}

Loading.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"])
};

Loading.defaultProps = {
  size: "lg"
};

export default Loading;
