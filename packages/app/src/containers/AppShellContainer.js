import React, { Component } from "react";
import { map } from "ramda";
import Composer from "react-composer";
import { AppShell } from "@offcourse/organisms";
import {
  OverlayContainer
} from "../containers";

import {
  SidebarProvider,
  OverlayProvider,
  AuthProvider,
  FlashProvider,
  ThemeProvider,
} from "../providers";

const {
  SIGNING_IN,
  SIGNING_OUT,
  CREATE_COURSE
} = OverlayProvider.constants;

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
    const { children, history } = this.props;
    return (
      <Composer
        components={[<SidebarProvider />, <AuthProvider />,
        <OverlayProvider />, <FlashProvider />, <ThemeProvider />]}
      >
        {(
          [sidebar, auth, overlay, flash, theme]) => {
          return (
            <AppShell
              position="fixed"
              messages={flash.messages}
              onLogoClick={() => history.push('/')}
              toggleSidebar={sidebar.toggle}
              isSidebarOpen={sidebar.isOpen}
              links={[
                ...this.createLinks({
                  openOverlay: overlay.open,
                  userName: auth.userName
                }),
                ...this.createThemeLinks({
                  themeNames: theme.all,
                  selectTheme: theme.switch,
                  currentTheme: theme.current
                })
              ]}
            >
              <OverlayContainer />
              {children}
            </AppShell>
          );
        }}
      </Composer>
    );
  }
}
