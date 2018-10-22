import React, { Component } from "react";
import PropTypes from "prop-types";
import ErrorScreen from "./ErrorScreen";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  static propTypes = {
    children: PropTypes.node.isRequired
  };

  componentDidCatch(e, i) {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <ErrorScreen />;
    }
    return children;
  }
}
