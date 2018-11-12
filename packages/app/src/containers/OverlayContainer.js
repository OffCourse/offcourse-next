import React, { memo } from "react";
import { Adopt } from "react-adopt";
import { Portal, Group } from "@offcourse/atoms";
import { Modal } from "@offcourse/molecules";
import { OverlayProvider } from "../providers";
import { LoadingModal } from "../components";

import {
  ForkCourseDialogContainer,
  AuthContainer,
  CourseFormContainer
} from ".";

const {
  SIGNING_IN,
  SIGNING_UP,
  SIGNING_OUT,
  RESETTING_PASSWORD,
  CREATE_COURSE,
  EDIT_COURSE,
  FORK_COURSE
} = OverlayProvider.constants;

const selectMode = ({ mode, courseId, close }) => {
  switch (mode) {
    case SIGNING_UP:
    case SIGNING_IN:
    case SIGNING_OUT:
    case RESETTING_PASSWORD:
      return <AuthContainer />;
    case EDIT_COURSE:
    case CREATE_COURSE:
      return <CourseFormContainer courseId={courseId} />;
    case FORK_COURSE:
      return <ForkCourseDialogContainer courseId={courseId} />;
    default:
      return <LoadingModal />;
  }
};

const mapper = {
  overlay: <OverlayProvider />
};

const OverlayContainer = () => (
  <Portal rootEl="overlay">
    <Adopt mapper={mapper}>
      {({ overlay }) => {
        const isOpen = overlay.isOpen;
        return (
          <Group justifyContent="center" alignItems="center">
            {isOpen ? <Modal>{selectMode(overlay)}</Modal> : null}
          </Group>
        );
      }}
    </Adopt>
  </Portal>
);

export default memo(OverlayContainer);
