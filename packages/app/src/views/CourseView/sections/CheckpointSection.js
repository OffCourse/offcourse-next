import React from "react";
import PropTypes from "prop-types";
import { CheckpointCard as CPC } from "../../../components";
import { CheckpointProvider } from "../../../providers";

const CheckpointSection = ({
  curator,
  goal,
  handlers,
  match,
  toggleCheckpoint
}) => {
  const { task } = match.params;
  const { goToCheckpoint, goToCourse } = handlers;
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
  toggleCheckpoint: PropTypes.func,
  handlers: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default CheckpointSection;
