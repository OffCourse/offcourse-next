import React, { Component } from "react";
import {
  ThemeContainer,
  AppShellContainer,
  HeadContainer,
  OverlayContainer
} from "../containers";

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeContainer>
        <AppShellContainer>
          <HeadContainer />
          <OverlayContainer />
          {children}
        </AppShellContainer>
      </ThemeContainer>
    );
  }
}
