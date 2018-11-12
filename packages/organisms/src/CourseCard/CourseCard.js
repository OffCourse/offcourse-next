import React, { memo } from "react";
import PropTypes from "prop-types";
import { Section } from "@offcourse/atoms";
import { identity, isEmpty, isNil } from "ramda";
import {
  ExpandableCard as Card,
  Header,
  Description,
  TagGroup,
  Share,
  Curator,
  CheckpointList
} from "@offcourse/molecules";
import { affordances } from "@offcourse/constants";
const { SELECTABLE, CLOSEABLE, EXPANDABLE } = affordances;

const hasTags = tags => {
  return !isEmpty(tags) && !isNil(tags);
};

const CourseCard = ({
  course,
  onCheckpointToggle,
  onGoalClick,
  onCheckpointClick,
  onTagClick,
  onCuratorClick,
  shareMessage,
  layout,
  affordance,
  initialLevel
}) => {
  const {
    courseId,
    goal,
    curator,
    courseUrl,
    avatarUrl,
    profileUrl,
    checkpoints,
    description,
    width,
    tags
  } = course;

  const handleCheckpointToggle = ({ checkpointId, task, checked }) => {
    onCheckpointToggle({
      courseId: course.courseId,
      checkpointId,
      goal: course.goal,
      task,
      checked
    });
  };

  const handleCheckpointClick = ({ task, checkpointId }) => {
    onCheckpointClick({
      courseId: course.courseId,
      goal: course.goal,
      curator: course.curator,
      checkpointId,
      task
    });
  };

  return (
    <Card
      affordance={affordance}
      width={width || ["100%", "18rem", "18rem"]}
      initialLevel={initialLevel}
      layout={layout}
    >
      <Header
        onClick={() => onGoalClick({ goal, curator, courseId })}
        section="header"
      >
        {goal}
      </Header>
      <Curator
        section="meta"
        curator={curator}
        onClick={onCuratorClick}
        profileUrl={profileUrl}
        avatarUrl={avatarUrl}
      />
      <Description label="Course Description" section="description">
        {description}
      </Description>
      <Section justifyContent="stretch" section="checkpoints">
        <CheckpointList
          onToggle={onCheckpointToggle && handleCheckpointToggle}
          onClick={onCheckpointClick && handleCheckpointClick}
          checkpoints={checkpoints}
        />
      </Section>
      {hasTags(tags) && (
        <Section section="tags">
          <TagGroup
            onClick={onTagClick}
            flex={1}
            direction="both"
            tags={tags}
          />
        </Section>
      )}
      <Share
        section="social"
        url={courseUrl || "loading..."}
        text={shareMessage}
        providers={["twitter", "facebook", "url"]}
      />
    </Card>
  );
};

CourseCard.propTypes = {
  onCheckpointToggle: PropTypes.func,
  onCheckpointClick: PropTypes.func,
  onCuratorClick: PropTypes.func,
  onGoalClick: PropTypes.func,
  onTagClick: PropTypes.func,
  shareMessage: PropTypes.string,
  course: PropTypes.shape({
    courseId: PropTypes.string.isRequired,
    goal: PropTypes.string.isRequired,
    curator: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
    courseUrl: PropTypes.string
  }),
  initialLevel: PropTypes.number,
  affordance: PropTypes.oneOf([EXPANDABLE, SELECTABLE, CLOSEABLE]),
  layout: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

CourseCard.defaultProps = {
  shareMessage: "Checkout This Course",
  affordance: EXPANDABLE,
  onCuratorClick: identity,
  onGoalClick: identity,
  onCheckpointClick: identity,
  onTagClick: identity,
  layout: [
    ["header"],
    ["header", "meta"],
    ["header", "meta", "description", "social"],
    ["header", "meta", "description", "checkpoints", "tags", "social"]
  ]
};

export default CourseCard;
