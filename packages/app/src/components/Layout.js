import React, { Component } from "react";
import {
  AppShellContainer
} from "../containers";
import {
  Route
} from 'react-router-dom'

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Route children={(props) => (
        <AppShellContainer {...props}>
          {children}
        </AppShellContainer>
      )} />
    );
  }
}