import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import Layout from "./ErrorLayout";

export default class NotFound extends Component {
  static propTypes = {
    goHome: PropTypes.func
  };

  static defaultProps = {
    goHome: identity
  };

  render() {
    const { goHome } = this.props;
    const error = {
      errorType: "notFound",
      message: "Oops! You've Outsmarted Us...",
      explanation:
        "Currently, this page doesn't seem to exist (yet). Please check whether you have entered the correct URL in the text field of your browser. If that doesn't work, you can use the button below to go back to the home page."
    };
    const action = {
      message: "Take Me Home",
      onClick: goHome
    };
    return <Layout action={action} error={error} goHome={goHome} />;
  }
}
