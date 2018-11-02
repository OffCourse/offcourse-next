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
    <Group overflow="hidden scroll">
      <CheckpointCard
        border="none"
        checkable={!!toggleCheckpoint}
        level={2}
        borderBottom={[1, 2, 2]}
        borderColor={["grayScale.1", "grayScale.2", "grayScale.2"]}
        mb={[0, 6, 6]}
        checkpoint={{ course, ...checkpoint }}
        onCheckpointToggle={toggleCheckpoint}
        onCheckpointClick={goToCheckpoint}
        onCourseClick={goToCourse}
      />
      <ErrorBoundary>
        <ResourceProvider resourceUrl={checkpoint.resourceUrl}>
          {({ resource }) => {
            return <ResourceCard resource={resource} />;
          }}
        </ResourceProvider>
      </ErrorBoundary>
    </Group>
  );
};

CheckpointSection.propTypes = {
  course: PropTypes.object.isRequired,
  toggleCheckpoint: PropTypes.func,
  handlers: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default CheckpointSection;
