import React, { memo, useContext } from "react";
import { AppStateContext } from "../contexts";
import { Portal } from "@offcourse/atoms";
import { NavBar } from "@offcourse/molecules";

const NavBarContainer = () => {
  const { searchbar, sidebar, route } = useContext(AppStateContext);
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
};

export default memo(NavBarContainer);
