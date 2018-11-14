import React from "react";
import PropTypes from "prop-types";
import { find, propEq } from "ramda";
import { Group } from "@offcourse/atoms";
import { CheckpointCard, LoadingCard } from "@offcourse/organisms";
import { ErrorCard, ResourceCard, ErrorBoundary } from "../../../components";
import { ResourceProvider } from "../../../providers";
import { affordances, errors as errorTypes } from "@offcourse/constants";

const { UNCHECKABLE, NONE, CHECKABLE } = affordances;
const { RESOURCE_NOT_LOADING, CHECKPOINT_NOT_FOUND } = errorTypes;

const CheckpointSection = ({
  isLoggedIn,
  course,
  handlers,
  match,
  toggleCheckpoint
}) => {
  const { task } = match.params;
  const { checkpoints, goal, courseId, loading } = course;
  const { goToCollection, goToCourse } = handlers;

  if (loading) {
    return null;
  }

  const checkpoint = find(propEq("task", task), checkpoints);
  if (!checkpoint) {
    return <ErrorCard errorType={CHECKPOINT_NOT_FOUND} />;
  }

  const { checkpointId } = checkpoint;
  const breadcrumbs = [
    {
      text: course.goal,
      onClick: () => goToCourse(course)
    }
  ];
  return (
    <Group
      justifyItems="stretch"
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
          toggleCheckpoint({ checked, goal, courseId, task, checkpointId })
        }
      />
      <ErrorBoundary
        key={task}
        componentToRender={() => <ErrorCard errorType={RESOURCE_NOT_LOADING} />}
      >
        <ResourceProvider resourceUrl={checkpoint.resourceUrl}>
          {({ resource }) => {
            return resource.loading ? (
              <LoadingCard />
            ) : (
              <ResourceCard resource={resource} />
            );
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
