import React, { memo } from "react";
import { Adopt } from "react-adopt";
import { Portal } from "@offcourse/atoms";
import { NavBar } from "@offcourse/molecules";
import { Route } from "../components";

import { SearchbarProvider, SidebarProvider } from "../providers";

const mapper = {
  route: <Route />,
  sidebar: <SidebarProvider />,
  searchbar: <SearchbarProvider />
};

const NavBarContainer = () => (
  <Adopt mapper={mapper}>
    {({ searchbar, sidebar, route }) => {
      const { goHome } = route.handlers;
      const toggleSidebar = () => {
        searchbar.close();
        sidebar.toggle();
      };
      return (
        <Portal rootEl="navbar">
          <NavBar
            onLogoClick={goHome}
            onMenuButtonClick={toggleSidebar}
            onSearchButtonClick={searchbar.toggle}
          />
        </Portal>
      );
    }}
  </Adopt>
);

export default memo(NavBarContainer);
