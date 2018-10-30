import React from "react";
import PropTypes from "prop-types";
import { CheckpointSection, CheckpointsSection } from "./sections";
import { CourseDetailLayout } from "../../components";

const View = ({ toggleCheckpoint, match, handlers, course, action }) => {
  const { goToCheckpoint } = handlers;
  const cardSections = ["header", "meta"];
  const { task } = match.params;
  const layout = task
    ? [[...cardSections, "checkpoints"]]
    : [[...cardSections, "description"]];
  return (
    <CourseDetailLayout
      action={action}
      isMasterVisible={!task}
      handlers={handlers}
      course={course}
      layout={layout}
      {...action}
    >
      {task ? (
        <CheckpointSection
          {...match.params}
          {...handlers}
          toggleCheckpoint={toggleCheckpoint}
        />
      ) : (
        <CheckpointsSection
          course={course}
          toggleCheckpoint={toggleCheckpoint}
          goToCheckpoint={goToCheckpoint}
        />
      )}
    </CourseDetailLayout>
  );
};

View.propTypes = {
  toggleCheckpoint: PropTypes.func,
  action: PropTypes.object.isRequired,
  handlers: PropTypes.object.isRequired,
  course: PropTypes.object.isRequired
};

export default View;
