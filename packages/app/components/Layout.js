import React, { Component } from "react";
import {
  ThemeContainer,
  AppShellContainer,
  HeadContainer,
  OverlayContainer
} from "../containers";

import {
  SidebarContext,
  OverlayContext,
  AuthContext,
  FlashContext,
  ThemeContext
} from "../contexts";

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeContext>
        <FlashContext>
          <AuthContext>
            <OverlayContext>
              <SidebarContext>
                <ThemeContainer>
                  <AppShellContainer>
                    <HeadContainer />
                    <OverlayContainer />
                    {children}
                  </AppShellContainer>
                </ThemeContainer>
              </SidebarContext>
            </OverlayContext>
          </AuthContext>
        </FlashContext>
      </ThemeContext>
    );
  }
}