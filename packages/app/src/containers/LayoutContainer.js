import React, { Component } from "react";
import { map } from "ramda";
import PropTypes from "prop-types";
import { Adopt } from "react-adopt";
import { AppShell } from "@offcourse/organisms";
import { OverlayContainer } from "../containers";
import { Route } from "../components";
import { debounce } from "debounce";

import {
  SearchbarProvider,
  SidebarProvider,
  OverlayProvider,
  AuthProvider,
  FlashProvider,
  ThemeProvider
} from "../providers";

const { SIGNING_IN, SIGNING_OUT, CREATE_COURSE } = OverlayProvider.constants;
const mapper = {
  searchbar: <SearchbarProvider />,
  sidebar: <SidebarProvider />,
  auth: <AuthProvider />,
  overlay: <OverlayProvider />,
  flash: <FlashProvider />,
  theme: <ThemeProvider />,
  route: <Route />
};

export default class LayoutContainer extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
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

  createUserLinks({ openOverlay, changeCardSize }) {
    return [
      {
        onClick: () => openOverlay({ mode: CREATE_COURSE }),
        title: "Create Course",
        level: 0
      },
      {
        href: "https://condescending-wing-149611.netlify.com/",
        title: "Contribute",
        level: 1
      },
      {
        onClick: () => openOverlay({ mode: SIGNING_OUT }),
        title: "Sign Out",
        level: 0
      }
    ];
  }

  createGuestLinks({ openOverlay }) {
    return [
      {
        onClick: () => openOverlay({ mode: SIGNING_IN }),
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
      <Adopt mapper={mapper}>
        {({ sidebar, searchbar, auth, overlay, flash, theme, route }) => {
          const { goHome, goToCollection } = route.handlers;
          return (
            <AppShell
              position="fixed"
              messages={flash.messages}
              onLogoClick={() => searchbar.close() && goHome()}
              toggleSidebar={sidebar.toggle}
              toggleSearchbar={searchbar.toggle}
              isSearchbarOpen={searchbar.isOpen}
              onSearchChange={debounce(
                ({ searchTerm }) => goToCollection({ searchTerm }),
                300
              )}
              onSearchSubmit={({ searchTerm }) =>
                searchbar.close() && goToCollection({ searchTerm })
              }
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
      </Adopt>
    );
  }
}
