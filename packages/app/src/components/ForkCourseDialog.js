import React, { Component } from "react";
import PropTypes from "prop-types";
import { Group } from "@offcourse/atoms";
import { ButtonGroup, Modal } from "@offcourse/molecules";

export default class ForkCourseDialog extends Component {
  static propTypes = {
    closeOverlay: PropTypes.func.isRequired,
    forkCourse: PropTypes.func.isRequired
  };

  render() {
    const { closeOverlay, forkCourse } = this.props;
    return (
      <Group justifyContent="center" alignItems="center">
        <Modal.Heading>Do you want to fork this course?</Modal.Heading>
        <Modal.Section>
          <ButtonGroup>
            <ButtonGroup.Button onClick={closeOverlay}>
              Nah...
            </ButtonGroup.Button>
            <ButtonGroup.Button onClick={forkCourse} variant="positive">
              Fork!
            </ButtonGroup.Button>
          </ButtonGroup>
        </Modal.Section>
      </Group>
    );
  }
}
