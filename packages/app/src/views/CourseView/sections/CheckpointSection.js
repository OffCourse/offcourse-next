import React from "react";
import PropTypes from "prop-types";
import { find, propEq } from "ramda";
import { Group } from "@offcourse/atoms";
import { CheckpointCard, LoadingCard } from "@offcourse/organisms";
import { ErrorCard, ResourceCard, ErrorBoundary } from "../../../components";
import { ResourceProvider, CheckpointProvider } from "../../../providers";
import { affordances, errors as errorTypes } from "@offcourse/constants";

const { NONE, CHECKABLE } = affordances;
const { RESOURCE_NOT_LOADING, CHECKPOINT_NOT_FOUND } = errorTypes;

const CheckpointSection = ({
  isLoggedIn,
  course,
  handlers,
  match,
  toggleCheckpoint
}) => {
  const { task } = match.params;
  const { goal, courseId, loading, curator } = course;
  const { goToCollection, goToCourse } = handlers;

  if (loading) {
    return null;
  }

  return (
    <CheckpointProvider checkpointQuery={{ curator, goal, task }}>
      {({ checkpoint }) => {
        if (checkpoint.loading) {
          return "loading...";
        }

        const { checkpointId, resource } = checkpoint;
        const breadcrumbs = [
          {
            text: course.goal,
            onClick: () => goToCourse(course)
          }
        ];
        return (
          <Group
            minWidth={["100%", "100%", "25rem"]}
            maxWidth={["100%", "100%", "55rem"]}
          >
            <CheckpointCard
              border="none"
              level={2}
              breadcrumbs={breadcrumbs}
              onTagClick={goToCollection}
              affordance={isLoggedIn ? CHECKABLE : NONE}
              mb={[0, 6, 6]}
              checkpoint={{ course, ...checkpoint }}
              onCheckpointToggle={({ checked }) =>
                toggleCheckpoint({
                  checked,
                  goal,
                  courseId,
                  task,
                  checkpointId
                })
              }
            />
            <ErrorBoundary
              key={task}
              componentToRender={() => (
                <ErrorCard errorType={RESOURCE_NOT_LOADING} />
              )}
            >
              <ResourceCard resource={resource} />
            </ErrorBoundary>
          </Group>
        );
      }}
    </CheckpointProvider>
  );
};

CheckpointSection.propTypes = {
  isLoggedIn: PropTypes.bool,
  course: PropTypes.object.isRequired,
  toggleCheckpoint: PropTypes.func,
  handlers: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default CheckpointSection;
