import React from "react";
import { Adopt } from "react-adopt";
import { AppStateContext } from "../../contexts";
import Route from "../../components/Route";
import SearchbarProvider from "../SearchbarProvider";
import FlashProvider from "../FlashProvider";
import SidebarProvider from "../SidebarProvider";
import OverlayProvider from "../OverlayProvider";

const mapper = {
  sidebar: <SidebarProvider />,
  flash: <FlashProvider />,
  searchbar: <SearchbarProvider />,
  route: <Route />,
  overlay: <OverlayProvider />
};

const AppStateProvider = ({ children }) => {
  return (
    <Adopt mapper={mapper}>
      {props => (
        <AppStateContext.Provider value={props}>
          {children}
        </AppStateContext.Provider>
      )}
    </Adopt>
  );
};

export default AppStateProvider;
