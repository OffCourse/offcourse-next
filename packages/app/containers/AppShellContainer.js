import React, { Component } from "react";
import { map } from "ramda";
import Composer from "react-composer";
import { AppShell } from "@offcourse/organisms";
import { Query, Mutation } from "../components";
import { queries, mutations } from "../graphql";
import { overlayModes } from "@offcourse/constants";
import { goHome } from "../tempUtils";

const { SIGNING_IN, SIGNING_OUT, CREATE_COURSE } = overlayModes;

export default class AppShellContainer extends Component {
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

  createUserLinks({ openOverlay }) {
    return [
      {
        onClick: () => openOverlay({ variables: { mode: SIGNING_OUT } }),
        title: "Sign Out",
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

  createGuestLinks({ openOverlay }) {
    return [
      {
        onClick: () => openOverlay({ variables: { mode: SIGNING_IN } }),
        title: "Sign IN",
        level: 0
      },
      {
        href: "https://condescending-wing-149611.netlify.com/",
        title: "Contribute",
        level: 1
      }
    ];
  }

  createLinks({ userName, openOverlay }) {
    return userName
      ? this.createUserLinks({ openOverlay })
      : this.createGuestLinks({ openOverlay });
  }

  render() {
    const { children } = this.props;
    return (
      <Composer
        components={[
          <Query query={queries.appState} />,
          <Mutation mutation={mutations.toggleSidebar} />,
          <Mutation mutation={mutations.openOverlay} />,
          <Mutation mutation={mutations.selectTheme} />
        ]}
      >
        {([{ data }, toggleSidebar, openOverlay, selectTheme]) => {
          const { auth, messages } = data;
          const { userName } = auth;

          return (
            <AppShell
              position="fixed"
              messages={messages}
              onLogoClick={goHome}
              toggleSidebar={toggleSidebar}
              isSidebarOpen={data.sidebar.isOpen}
              links={[
                ...this.createLinks({
                  openOverlay,
                  userName
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
