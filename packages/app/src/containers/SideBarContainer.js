import React, { memo } from "react";
import { Adopt } from "react-adopt";
import { Portal, Slide, Bar } from "@offcourse/atoms";
import { SidebarProvider, OverlayProvider } from "../providers";

const mapper = {
  sidebar: <SidebarProvider />,

  searchbar: <SidebarProvider />,
  overlay: <OverlayProvider />
};

const BackdropContainer = () => {
  return (
    <Portal rootEl="sidebar">
      <Adopt mapper={mapper}>
        {({ sidebar, overlay }) => {
          //   const closeAll = () => {
          //     sidebar.isOpen && sidebar.close();
          //     overlay.isOpen && overlay.close();
          //   };
          return (
            <div
              style={{
                position: "absolute",
                background: "rgba(0, 0, 0, 0)",
                top: 0,
                bottom: 0,
                right: 0,
                pointerEvents: "none",
                width: "12rem"
              }}
            >
              <Slide
                distance="12rem"
                direction="right"
                pose={sidebar.isOpen ? "open" : "close"}
              >
                <Bar
                  position="absolute"
                  top={0}
                  bottom={0}
                  height="100vh"
                  width="12rem"
                  right={0}
                />
              </Slide>
            </div>
          );
        }}
      </Adopt>
    </Portal>
  );
};

export default memo(BackdropContainer);
