import React, { memo, Fragment } from "react";
import { Adopt } from "react-adopt";
import { Portal, Backdrop, Fade } from "@offcourse/atoms";
import { SidebarProvider, OverlayProvider } from "../providers";
import ScrollLock from "react-scrolllock";

const mapper = {
  sidebar: <SidebarProvider />,
  overlay: <OverlayProvider />
};

const BackdropContainer = () => {
  return (
    <Portal rootEl="backdrop">
      <Adopt mapper={mapper}>
        {({ sidebar, overlay }) => {
          const isOpen = sidebar.isOpen || overlay.isOpen;

          const closeAll = () => {
            sidebar.isOpen && sidebar.close();
          };

          return (
            <Fragment>
              <Fade
                minOpacity={0}
                maxOpacity={0.7}
                pose={isOpen ? "visible" : "hidden"}
              >
                <Backdrop isVisible={isOpen} onClick={closeAll} />
                {sidebar.isOpen ? <ScrollLock /> : null}
              </Fade>
            </Fragment>
          );
        }}
      </Adopt>
    </Portal>
  );
};

export default memo(BackdropContainer);
