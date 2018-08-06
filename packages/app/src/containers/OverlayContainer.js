import React, { Component } from "react";
import { Modal } from "@offcourse/molecules";
import { AuthContainer, CourseFormContainer } from ".";
import { LoadingModal } from "../components";
import { OverlayProvider } from "../providers";

const {
  SIGNING_IN,
  SIGNING_UP,
  SIGNING_OUT,
  RESETTING_PASSWORD,
  CREATE_COURSE,
  EDIT_COURSE
} = OverlayProvider.constants;
export default class OverlayContainer extends Component {
  selectMode({ mode, courseId, close }) {
    switch (mode) {
      case SIGNING_UP:
      case SIGNING_IN:
      case SIGNING_OUT:
      case RESETTING_PASSWORD:
        return <AuthContainer />;
      case EDIT_COURSE:
      case CREATE_COURSE:
        return <CourseFormContainer closeOverlay={close} courseId={courseId} />;
      default:
        return <LoadingModal />;
    }
  }

  render() {
    return (
      <OverlayProvider>
        {(overlay) => {
          return (
            <Modal close={overlay.close} isOpen={overlay.isOpen}>
              {this.selectMode(overlay)}
            </Modal>
          );
        }}
      </OverlayProvider>
    );
  }
}
