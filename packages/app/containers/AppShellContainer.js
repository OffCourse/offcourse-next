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

  createUserLinks({ openOverlay, changeCardSize }) {
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

  createGuestLinks({ openOverlay, changeCardSize }) {
    return [
      {
        onClick: () => openOverlay({ variables: { mode: SIGNING_IN } }),
        title: "Sign In",
        level: 0
      },
      {
        href: "https://condescending-wing-149611.netlify.com/",
        title: "Contribute",
        level: 1
      }
    ];
  }

  createLinks({ userName, openOverlay, changeCardSize }) {
    return userName
      ? this.createUserLinks({ openOverlay, changeCardSize })
      : this.createGuestLinks({ openOverlay, changeCardSize });
  }

  render() {
    const { children } = this.props;
    return (
      <Composer
        components={[
          <Query query={queries.appState} />,
          <Mutation mutation={mutations.toggleSidebar} />,
          <Mutation mutation={mutations.openOverlay} />,
          <Mutation mutation={mutations.selectTheme} />,
          <Mutation mutation={mutations.changeCardSize} />
        ]}
      >
        {([{ data: appStateData }, toggleSidebar, openOverlay, selectTheme, changeCardSize]) => {
          const { auth, theme, messages, sidebar } = appStateData;

          return (
            <AppShell
              position="fixed"
              messages={messages}
              onLogoClick={goHome}
              toggleSidebar={toggleSidebar}
              isSidebarOpen={sidebar.isOpen}
              links={[
                ...this.createLinks({
                  openOverlay,
                  changeCardSize,
                  userName: auth.userName
                }),
                ...this.createThemeLinks({
                  themeNames: theme.all,
                  selectTheme,
                  currentTheme: theme.current
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
