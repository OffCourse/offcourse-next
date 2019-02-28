import React, { memo } from "react";
import { Adopt } from "react-adopt";
import { Portal, Slide, Bar } from "@offcourse/atoms";
import { flatten } from "ramda";
import { Menu } from "@offcourse/molecules";
import { AuthProvider, SidebarProvider, OverlayProvider } from "../providers";
import { Route } from "../components";

import { overlayModes } from "@offcourse/constants";

const { SIGNING_IN, SIGNING_OUT, CREATE_COURSE } = overlayModes;

const mapper = {
  auth: <AuthProvider />,
  sidebar: <SidebarProvider />,
  route: <Route />,
  searchbar: <SidebarProvider />,
  overlay: <OverlayProvider />
};

const createUserLinks = ({ openOverlay }) => {
  return [
    {
      onClick: () => openOverlay({ mode: CREATE_COURSE }),
      title: "Create Course",
      level: 0
    },
    {
      onClick: () => openOverlay({ mode: SIGNING_OUT }),
      title: "Sign Out",
      level: 0
    }
  ];
};

const createGuestLinks = ({ openOverlay }) => {
  return [
    {
      onClick: () => openOverlay({ mode: SIGNING_IN }),
      title: "Sign In",
      level: 0
    }
  ];
};

const createGeneralLinks = ({ handlers, closeSidebar }) => {
  return [
    {
      onClick: () => {
        handlers.goToFAQ();
        closeSidebar();
      },
      title: "Support",
      level: 0
    },
    {
      onClick: () => {
        handlers.goToAbout();
        closeSidebar();
      },
      title: "About",
      level: 0
    }
  ];
};
const createLinks = ({ userName, handlers, openOverlay, closeSidebar }) => {
  return flatten([
    userName
      ? createUserLinks({ openOverlay })
      : createGuestLinks({ openOverlay }),
    createGeneralLinks({ handlers, closeSidebar })
  ]);
};

const SideBarContainer = () => {
  return (
    <Portal rootEl="sidebar">
      <Adopt mapper={mapper}>
        {({ route, sidebar, overlay, auth }) => {
          const openOverlay = ({ mode }) => {
            overlay.open({ mode });
            sidebar.close();
          };
          const links = createLinks({
            userName: auth.userName,
            openOverlay,
            handlers: route.handlers,
            closeSidebar: sidebar.close
          });

          const barWidth = "12rem";

          return (
            <div
              style={{
                position: "fixed",
                background: "rgba(0, 0, 0, 0)",
                top: 0,
                bottom: 0,
                right: 0,
                pointerEvents: "none",
                width: barWidth
              }}
            >
              <Slide
                distance={barWidth}
                direction="right"
                pose={sidebar.isOpen ? "open" : "close"}
              >
                <Bar
                  position="absolute"
                  flexDirection="column"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  top={0}
                  bottom={0}
                  height="100vh"
                  width={barWidth}
                  right={0}
                >
                  <Menu links={links} />
                </Bar>
              </Slide>
            </div>
          );
        }}
      </Adopt>
    </Portal>
  );
};

export default memo(SideBarContainer);
