import React from "react";
import PropTypes from "prop-types";
import { CheckpointCard as CPC } from "../../../components";
import { CheckpointProvider } from "../../../providers";

const CheckpointSection = ({
  curator,
  goal,
  task,
  goToCheckpoint,
  goToCourse,
  toggleCheckpoint
}) => {
  return (
    <CheckpointProvider checkpointQuery={{ curator, goal, task }}>
      {({ checkpoint }) => {
        return (
          <CPC
            level={2}
            onCourseClick={goToCourse}
            onCheckpointToggle={toggleCheckpoint}
            onCheckpointClick={goToCheckpoint}
            checkpoint={checkpoint}
            key={`${checkpoint.checkpointId}-${checkpoint.completed}`}
          />
        );
      }}
    </CheckpointProvider>
  );
};

CheckpointSection.propTypes = {
  curator: PropTypes.string.isRequired,
  goal: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  toggleCheckpoint: PropTypes.func,
  goToCourse: PropTypes.func.isRequired,
  goToCheckpoint: PropTypes.func.isRequired
};

export default CheckpointSection;
