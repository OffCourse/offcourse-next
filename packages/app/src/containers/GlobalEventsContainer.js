import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Adopt } from "react-adopt";
import {
  SearchbarProvider,
  SidebarProvider,
  OverlayProvider
} from "../providers";

const mapper = {
  sidebar: <SidebarProvider />,
  searchbar: <SearchbarProvider />,
  overlay: <OverlayProvider />
};

const mapProps = ({ sidebar, searchbar, overlay }) => {
  return {
    closeSidebar: sidebar.close,
    toggleSearchBar: searchbar.toggle,
    toggleSidebar: sidebar.toggle,
    closeSearchBar: searchbar.close,
    closeOverlay: overlay.close
  };
};

const GlobalEvents = ({
  closeSidebar,
  toggleSearchBar,
  toggleSidebar,
  closeSearchBar,
  closeOverlay
}) => {
  const handleKeyPress = e => {
    const { keyCode, ctrlKey, altKey } = e;

    if (keyCode === 27) {
      closeSidebar() && closeSearchBar() && closeOverlay();
    }
    if (keyCode === 191 && ctrlKey) {
      toggleSearchBar();
    }
    if (keyCode === 191 && altKey) {
      toggleSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return null;
};
GlobalEvents.propTypes = {
  closeSearchBar: PropTypes.func.isRequired,
  toggleSearchBar: PropTypes.func.isRequired,
  closeSidebar: PropTypes.func.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  closeOverlay: PropTypes.func.isRequired
};

const GlobalEventsContainer = () => {
  return (
    <Adopt mapProps={mapProps} mapper={mapper}>
      {({ ...actions }) => {
        return <GlobalEvents {...actions} />;
      }}
    </Adopt>
  );
};

export default GlobalEventsContainer;
