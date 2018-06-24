import React, { Component } from "react";
import { ThemeProvider, injectGlobal } from "styled-components";
import * as themes from "@offcourse/themes";
import { AppShell } from "@offcourse/organisms";
import Router from "next/router";
import AppShellData from "./AppShellData";

export default class AppShellContainer extends Component {
  goToHome = () => {
    Router.push("/");
  };

  render() {
    const { children, switchTheme } = this.props;
    return (
      <AppShellData>
        {({ sidebar, toggleSidebar, switchTheme, openOverlay, theme: t }) => {
          const theme = themes[t.current];
          injectGlobal(theme);
          const links = [
            {
              onClick: openOverlay,
              title: "Sign In",
              level: 1
            },
            {
              onClick: switchTheme,
              title: "Switch Theme ",
              level: 1
            },
            {
              href: "https://condescending-wing-149611.netlify.com/",
              title: "Contribute",
              level: 3
            }
          ];
          return (
            <ThemeProvider theme={theme}>
              <AppShell
                position="fixed"
                onLogoClick={this.goToHome}
                toggleSidebar={toggleSidebar}
                isSidebarOpen={sidebar.isOpen}
                links={links}
              >
                {children}
              </AppShell>
            </ThemeProvider>
          );
        }}
      </AppShellData>
    );
  }
}
