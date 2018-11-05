import React from "react";
import PropTypes from "prop-types";
import { find, propEq } from "ramda";
import { Text, Heading, Avatar, Card, Loading, Group } from "@offcourse/atoms";
import { CheckpointCard } from "@offcourse/organisms";
import { ResourceCard, ErrorBoundary } from "../../../components";
import { ResourceProvider } from "../../../providers";
import { errors as errorTypes, sizes } from "@offcourse/constants";
import { errors } from "../../../content";

const { RESOURCE_NOT_LOADING, CHECKPOINT_NOT_FOUND } = errorTypes;

const { LARGE } = sizes;

const ErrorCard = ({ errorType }) => {
  const { message, explanation } = errors[errorType];
  return (
    <Card p={8}>
      <Group alignItems="center">
        <Group mb={6}>
          <Avatar size={LARGE} variant={errorType} />
        </Group>
        <Group mb={6}>
          <Heading>{message}</Heading>
        </Group>
        <Text size={LARGE}>{explanation}</Text>
      </Group>
    </Card>
  );
};

const CheckpointSection = ({ course, handlers, match, toggleCheckpoint }) => {
  const { task } = match.params;
  const { checkpoints } = course;
  const { goToCheckpoint, goToCourse } = handlers;
  const checkpoint = find(propEq("task", task), checkpoints);

  if (!course || course.status === "loading") {
    return <Loading />;
  }

  if (!checkpoint) {
    return <ErrorCard errorType={CHECKPOINT_NOT_FOUND} />;
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
      <ErrorBoundary
        componentToRender={() => <ErrorCard errorType={RESOURCE_NOT_LOADING} />}
      >
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
