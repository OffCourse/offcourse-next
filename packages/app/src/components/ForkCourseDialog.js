import React, { memo } from "react";
import PropTypes from "prop-types";
import { Group } from "@offcourse/atoms";
import { ButtonGroup, Modal } from "@offcourse/molecules";
import { variants } from "@offcourse/constants";

const { POSITIVE } = variants;

const ForkCourseDialog = ({ closeOverlay, forkCourse }) => {
  return (
    <Group justifyContent="center" alignItems="center">
      <Modal.Heading>Do you want to fork this course?</Modal.Heading>
      <Modal.Section>
        <ButtonGroup>
          <ButtonGroup.Button onClick={closeOverlay}>Nah...</ButtonGroup.Button>
          <ButtonGroup.Button onClick={forkCourse} variant={POSITIVE}>
            Fork!
          </ButtonGroup.Button>
        </ButtonGroup>
      </Modal.Section>
    </Group>
  );
};

ForkCourseDialog.propTypes = {
  closeOverlay: PropTypes.func.isRequired,
  forkCourse: PropTypes.func.isRequired
};

export default memo(ForkCourseDialog);
