import React from "react";
import PropTypes from "prop-types";
import { map } from "ramda";
import { Group } from "@offcourse/atoms";
import { CheckpointCard } from "@offcourse/organisms";
import { CheckpointCard as CPC, CourseDetailLayout } from "../../components";
import { CheckpointProvider } from "../../providers";

const CheckpointsSection = ({ course, toggleCheckpoint, goToCheckpoint }) => {
  return (
    <Group mt={6}>
      {map(checkpoint => {
        const { completed, checkpointId } = checkpoint;
        return (
          <CheckpointCard
            level={completed ? 0 : 1}
            checkable={!!toggleCheckpoint}
            onCheckpointToggle={toggleCheckpoint}
            onCheckpointClick={goToCheckpoint}
            checkpoint={{ course, ...checkpoint }}
            key={checkpointId}
          />
        );
      }, course.checkpoints)}
    </Group>
  );
};

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

const View = ({ toggleCheckpoint, match, handlers, course, action }) => {
  const { goToCheckpoint } = handlers;
  const cardSections = ["header", "meta"];
  const { task } = match.params;
  return (
    <CourseDetailLayout
      action={action}
      isMasterVisible={!task}
      handlers={handlers}
      course={course}
      layout={
        task
          ? [[...cardSections, "checkpoints"]]
          : [[...cardSections, "description"]]
      }
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
