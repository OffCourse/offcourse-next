import React, { Component } from "react";
import { Modal } from "@offcourse/molecules";
import { Auth } from "@offcourse/organisms";

export default class OverlayContainer extends Component {
  render() {
    const { closeModal, isModalOpen } = this.props;
    const handler = message => alert(JSON.stringify(message, null, 2));
    return (
      <Modal close={closeModal} isOpen={isModalOpen}>
        <Auth
          signIn={handler}
          initialUserName="yeehaa"
          onCancel={closeModal}
          signUp={handler}
          resetPassword={handler}
        />
      </Modal>
    );
  }
}
