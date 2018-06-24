import React, { Component } from "react";
import { ThemeProvider, injectGlobal } from "styled-components";
import { map, identity } from "ramda";
import Router from "next/router";
import Composer from "react-composer";
import * as themes from "@offcourse/themes";
import { AppShell } from "@offcourse/organisms";
import { Query, Mutation } from "react-apollo";
import { queries, mutations } from "../graphql";
import { overlayModes } from "../constants";

const { SIGNING_IN, CREATE_COURSE } = overlayModes;

export default class AppShellContainer extends Component {
  goToHome = () => {
    Router.push("/");
  };

  createThemeLinks({ themeNames, currentTheme, selectTheme }) {
    return map(themeName => {
      return {
        onClick: () => selectTheme({ variables: { themeName } }),
        disabled: themeName === currentTheme,
        title: themeName,
        level: 3
      };
    }, themeNames);
  }

  createLinks({ openOverlay }) {
    return [
      {
        onClick: () => openOverlay({ variables: { mode: SIGNING_IN } }),
        title: "Sign In",
        level: 0
      },
      {
        onClick: () => openOverlay({ variables: { mode: CREATE_COURSE } }),
        title: "Create Course",
        level: 0
      },
      {
        href: "https://condescending-wing-149611.netlify.com/",
        title: "Contribute",
        level: 1
      }
    ];
  }

  render() {
    const { children, selectTheme, switchTheme } = this.props;
    return (
      <Composer
        components={[
          <Query query={queries.appState} children={identity} />,
          <Mutation mutation={mutations.toggleSidebar} children={identity} />,
          <Mutation mutation={mutations.openOverlay} children={identity} />,
          <Mutation mutation={mutations.selectTheme} children={identity} />
        ]}
      >
        {([{ data }, toggleSidebar, openOverlay, selectTheme]) => {
          return (
            <AppShell
              position="fixed"
              onLogoClick={this.goToHome}
              toggleSidebar={toggleSidebar}
              isSidebarOpen={data.sidebar.isOpen}
              links={[
                ...this.createLinks({
                  openOverlay
                }),
                ...this.createThemeLinks({
                  themeNames: data.theme.all,
                  selectTheme,
                  currentTheme: data.theme.current
                })
              ]}
            >
              {children}
            </AppShell>
          );
        }}
      </Composer>
    );
  }
}
