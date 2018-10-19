import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity, isEmpty, isNil } from "ramda";
import { Heading } from "@offcourse/atoms";
import {
  ExpandableCard as Card,
  Description,
  TagGroup,
  Share,
  Curator,
  CheckpointList
} from "@offcourse/molecules";

/**
 * The course card component for the Offcourse project
 */

export default class CourseCard extends Component {
  static propTypes = {
    status: PropTypes.string,
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
    layout: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
  };

  static defaultProps = {
    shareMessage: "Checkout This Course",
    expandable: false,
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

  handleCheckpointToggle = ({ checkpointId, task, checked }) => {
    const { course, onCheckpointToggle } = this.props;
    onCheckpointToggle({
      courseId: course.courseId,
      checkpointId,
      goal: course.goal,
      task,
      checked
    });
  };

  handleCheckpointClick = ({ task, checkpointId }) => {
    const { course, onCheckpointClick } = this.props;
    onCheckpointClick({
      courseId: course.courseId,
      goal: course.goal,
      curator: course.curator,
      checkpointId,
      task
    });
  };

  hasTags = tags => {
    return !isEmpty(tags) && !isNil(tags);
  };

  render() {
    const {
      course,
      onCheckpointToggle,
      onGoalClick,
      onCheckpointClick,
      onTagClick,
      onCuratorClick,
      shareMessage,
      layout,
      expandable,
      width,
      initialLevel
    } = this.props;
    const {
      courseId,
      goal,
      curator,
      courseUrl,
      avatarUrl,
      profileUrl,
      checkpoints,
      description,
      tags,
      status
    } = course;

    return (
      <Card
        inactive={status === "loading"}
        width={width || ["100%", "18rem", "18rem"]}
        expandable={expandable}
        initialLevel={initialLevel}
        layout={layout}
      >
        <Heading
          onClick={() => onGoalClick({ goal, curator, courseId })}
          section="header"
        >
          {goal}
        </Heading>
        <Curator
          section="meta"
          curator={curator}
          onClick={onCuratorClick}
          profileUrl={profileUrl}
          avatarUrl={avatarUrl}
        />
        {description && (
          <Description label="Course Description" section="description">
            {description}
          </Description>
        )}
        <CheckpointList
          section="checkpoints"
          onToggle={onCheckpointToggle && this.handleCheckpointToggle}
          onClick={onCheckpointClick && this.handleCheckpointClick}
          checkpoints={checkpoints}
        />
        {this.hasTags(tags) && (
          <TagGroup
            onClick={onTagClick}
            flex={1}
            direction="both"
            section="tags"
            tags={tags}
          />
        )}
        <Share
          section="social"
          url={courseUrl || "loading..."}
          text={shareMessage}
          providers={["twitter", "facebook", "url"]}
        />
      </Card>
    );
  }
}
