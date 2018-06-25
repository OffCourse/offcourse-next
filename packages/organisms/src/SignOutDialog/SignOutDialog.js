import React, { Component } from "react";
import { Group } from "@offcourse/atoms";
import { ButtonGroup, Modal } from "@offcourse/molecules";
import PropTypes from "prop-types";

export default class SignOutDialog extends Component {
  static propTypes = {
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired
  };

  render() {
    const { onConfirm, onCancel } = this.props;
    return (
      <Group justifyContent="center" alignItems="center">
        <Modal.Heading>Are You Sure You Want to Sign Out?</Modal.Heading>
        <Modal.Section>
          <ButtonGroup>
            <ButtonGroup.Button onClick={onCancel}>Wait...</ButtonGroup.Button>
            <ButtonGroup.Button onClick={onConfirm} variant="warning">
              Yes!
            </ButtonGroup.Button>
          </ButtonGroup>
        </Modal.Section>
      </Group>
    );
  }
}
