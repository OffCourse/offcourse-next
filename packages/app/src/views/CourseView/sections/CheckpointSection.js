import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Group } from "@offcourse/atoms";
import { CheckpointCard, LoadingCard } from "@offcourse/organisms";
import { ErrorCard, ResourceCard, ErrorBoundary } from "../../../components";
import { CheckpointProvider } from "../../../providers";
import { affordances, errors as errorTypes } from "@offcourse/constants";

const { NONE, CHECKABLE } = affordances;
const { RESOURCE_NOT_LOADING } = errorTypes;

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
    <Group
      minWidth={["100%", "100%", "25rem"]}
      maxWidth={["100%", "100%", "55rem"]}
    >
      <CheckpointProvider checkpointQuery={{ curator, goal, task }}>
        {({ checkpoint }) => {
          if (checkpoint.loading) {
            return <LoadingCard />;
          }

          const { checkpointId, resource } = checkpoint;
          const breadcrumbs = [
            {
              text: course.goal,
              onClick: () => goToCourse(course)
            }
          ];
          return (
            <Fragment>
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
            </Fragment>
          );
        }}
      </CheckpointProvider>
    </Group>
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
