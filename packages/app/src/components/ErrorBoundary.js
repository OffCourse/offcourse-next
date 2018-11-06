import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    componentToRender: PropTypes.func
  };

  static defaultProps = {
    componentToRender: () => <div>Oops...</div>
  };

  componentDidCatch(e, i) {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children, componentToRender: ErrorComponent } = this.props;
    if (hasError) {
      return <ErrorComponent />;
    }
    return children;
  }
}
