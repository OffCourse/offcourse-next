import React from "react";
import PropTypes from "prop-types";
import { map } from "ramda";
import { Group } from "@offcourse/atoms";
import { CheckpointCard } from "@offcourse/organisms";
import { affordances } from "@offcourse/constants";

const { NONE, CHECKABLE } = affordances;

const CheckpointsSection = ({
  course,
  isLoggedIn,
  toggleCheckpoint,
  handlers
}) => {
  const { goToCollection, goToCheckpoint } = handlers;
  const { courseId, curator, goal, loading } = course;
  return loading ? null : (
    <Group
      m={[6, 0, 0]}
      justifyContent="stretch"
      minWidth={["auto", "auto", "25rem"]}
      maxWidth={["auto", "auto", "55rem"]}
    >
      {map(checkpoint => {
        const { completed, checkpointId, task } = checkpoint;
        const affordance = isLoggedIn ? CHECKABLE : NONE;
        return (
          <CheckpointCard
            mb={6}
            level={completed ? 0 : 1}
            affordance={affordance}
            onTagClick={goToCollection}
            onCheckpointToggle={({ checked }) =>
              toggleCheckpoint({ checked, goal, courseId, task, checkpointId })
            }
            onCheckpointClick={() => goToCheckpoint({ goal, task, curator })}
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
  isLoggedIn: PropTypes.bool,
  toggleCheckpoint: PropTypes.func,
  handlers: PropTypes.object.isRequired
};

export default CheckpointsSection;
