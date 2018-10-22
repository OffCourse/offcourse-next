import React, { Component } from "react";
import PropTypes from "prop-types";
import { ErrorLayout } from "../../components";

export default class AboutView extends Component {
  static propTypes = {
    about: PropTypes.object,
    handlers: PropTypes.object
  };

  render() {
    const { about, handlers } = this.props;
    return (
      <ErrorLayout
        error={{ ...about }}
        action={{ message: "Go Home", onClick: handlers.goHome }}
      />
    );
  }
}
