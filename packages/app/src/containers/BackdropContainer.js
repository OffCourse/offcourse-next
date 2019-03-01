import React, { memo, Fragment, useContext } from "react";
import { AppStateContext } from "../contexts";
import { Portal, Backdrop, Fade } from "@offcourse/atoms";
import ScrollLock from "react-scrolllock";

const BackdropContainer = () => {
  const { sidebar, overlay } = useContext(AppStateContext);
  const isOpen = sidebar.isOpen || overlay.isOpen;

  const closeAll = () => {
    sidebar.isOpen && sidebar.close();
  };
  return (
    <Portal rootEl="backdrop">
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
    </Portal>
  );
};

export default memo(BackdropContainer);
