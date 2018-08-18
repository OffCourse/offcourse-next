import React, { Component } from "react";
import PropTypes from "prop-types";
import { AppShellContainer } from "../containers";
import { Route } from "../components";

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <Route
        children={props => (
          <AppShellContainer {...props}>{children}</AppShellContainer>
        )}
      />
    );
  }
}
