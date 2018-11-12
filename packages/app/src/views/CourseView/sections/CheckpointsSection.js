import React from "react";
import PropTypes from "prop-types";
import { map } from "ramda";
import { Group } from "@offcourse/atoms";
import { CheckpointCard } from "@offcourse/organisms";

const CheckpointsSection = ({ course, toggleCheckpoint, handlers }) => {
  const { goToCheckpoint } = handlers;
  return (
    <Group m={[6, 0, 0]}>
      {map(checkpoint => {
        const { completed, checkpointId } = checkpoint;
        return (
          <CheckpointCard
            mb={6}
            level={completed ? 0 : 1}
            checkable={!!toggleCheckpoint}
            onCheckpointToggle={toggleCheckpoint}
            onCheckpointClick={goToCheckpoint}
            checkpoint={{ course, ...checkpoint }}
            key={`${checkpointId}-${completed}`}
          />
        );
      }, course.checkpoints)}
    </Group>
  );
};

CheckpointsSection.propTypes = {
  course: PropTypes.object.isRequired,
  toggleCheckpoint: PropTypes.func,
  handlers: PropTypes.object.isRequired
};

export default CheckpointsSection;
