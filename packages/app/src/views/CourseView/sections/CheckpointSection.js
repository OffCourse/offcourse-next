import React from "react";
import PropTypes from "prop-types";
import { find, propEq } from "ramda";
import { Loading, Group } from "@offcourse/atoms";
import { CheckpointCard } from "@offcourse/organisms";
import { ResourceCard, ErrorBoundary } from "../../../components";
import { ResourceProvider } from "../../../providers";

const CheckpointSection = ({ course, handlers, match, toggleCheckpoint }) => {
  const { task } = match.params;
  const { checkpoints } = course;
  const { goToCheckpoint, goToCourse } = handlers;
  const checkpoint = find(propEq("task", task), checkpoints);

  if (!checkpoint) {
    return <Loading />;
  }
  return (
    <ResourceCard
      course={course}
      checkpoint={checkpoint}
      goToCheckpoint={goToCheckpoint}
      toggleCheckpoint={toggleCheckpoint}
      goToCourse={goToCourse}
    />
  );
};

CheckpointSection.propTypes = {
  course: PropTypes.object.isRequired,
  toggleCheckpoint: PropTypes.func,
  handlers: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default CheckpointSection;
