import React, { Component } from "react";
import {
  ThemeContainer,
  AppShellContainer,
  OverlayContainer
} from "../containers";

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeContainer>
        <AppShellContainer>
          <OverlayContainer />
          {children}
        </AppShellContainer>
      </ThemeContainer>
    );
  }
}