import React from "react";
import PropTypes from "prop-types";
import { find, propEq } from "ramda";
import { Text, Heading, Avatar, Card, Loading, Group } from "@offcourse/atoms";
import { CheckpointCard } from "@offcourse/organisms";
import { ResourceCard, ErrorBoundary } from "../../../components";
import { ResourceProvider } from "../../../providers";
import { errors, sizes } from "@offcourse/constants";

const { RESOURCE_NOT_LOADING, CHECKPOINT_NOT_FOUND } = errors;

const { LARGE } = sizes;

const ContentError = () => {
  return (
    <Card p={8}>
      <Group alignItems="center">
        <Group mb={6}>
          <Avatar size={LARGE} variant={RESOURCE_NOT_LOADING} />
        </Group>
        <Group mb={6}>
          <Heading>That Didn’t Go The Way We Planned...</Heading>
        </Group>
        <Text size={LARGE}>
          Sometimes technology seems to have its own way of doing things.
          Currently, this source doesn’t allow us to easily import its content.
          For now, why don’t you check out the content on the original webpage
          instead?
        </Text>
      </Group>
    </Card>
  );
};
const NotFoundError = () => {
  return (
    <Card p={8}>
      <Group alignItems="center">
        <Group mb={6}>
          <Avatar size={LARGE} variant={CHECKPOINT_NOT_FOUND} />
        </Group>
        <Group mb={6}>
          <Heading>That Didn’t Go The Way We Planned...</Heading>
        </Group>
        <Text size={LARGE}>
          Sometimes technology seems to have its own way of doing things.
          Currently, this source doesn’t allow us to easily import its content.
          For now, why don’t you check out the content on the original webpage
          instead?
        </Text>
      </Group>
    </Card>
  );
};

const CheckpointSection = ({ course, handlers, match, toggleCheckpoint }) => {
  const { task } = match.params;
  const { checkpoints } = course;
  const { goToCheckpoint, goToCourse } = handlers;
  const checkpoint = find(propEq("task", task), checkpoints);

  if (!course) {
    return <Loading />;
  }

  if (!checkpoint) {
    return <NotFoundError />;
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
      <ErrorBoundary componentToRender={ContentError}>
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
