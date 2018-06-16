import React, { Component } from "react";
import PropTypes from "prop-types";
import { isEmpty, isNil } from "ramda";
import { Card, Heading } from "@offcourse/atoms";
import {
  Description,
  TagGroup,
  Share,
  Curator,
  CheckpointList
} from "@offcourse/molecules";

/**
 * The course card component for the Offcourse project
 */

class CourseCard extends Component {
  static propTypes = {
    onCheckpointToggle: PropTypes.func,
    shareMessage: PropTypes.string,
    course: PropTypes.shape({
      courseId: PropTypes.string.isRequired,
      goal: PropTypes.string.isRequired,
      curator: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string,
      courseUrl: PropTypes.string
    })
  };

  static defaultProps = {
    shareMessage: "Checkout This Course"
  };

  handleCheckpointToggle = ({ checkpointId, checked }) => {
    const { course, onCheckpointToggle } = this.props;
    onCheckpointToggle({
      courseId: course.courseId,
      checkpointId,
      checked
    });
  };

  hasTags = tags => {
    return !isEmpty(tags) && !isNil(tags);
  };

  renderCard = course => {
    const { onCheckpointToggle, shareMessage } = this.props;
    const {
      goal,
      curator,
      courseUrl,
      avatarUrl,
      profileUrl,
      checkpoints,
      description,
      tags
    } = course;
    return (
      <Card>
        <Heading section="header">{goal}</Heading>
        <Curator
          section="meta"
          name={curator}
          profileUrl={profileUrl}
          avatarUrl={avatarUrl}
        />
        {description && (
          <Description label="Course Description" section="description">
            {description}
          </Description>
        )}
        <CheckpointList
          section="heckpoints"
          onToggle={onCheckpointToggle && this.handleCheckpointToggle}
          checkpoints={checkpoints}
        />
        {this.hasTags(tags) && (
          <TagGroup flex={1} direction="both" section="tags" tags={tags} />
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

  render() {
    const { course } = this.props;
    return this.renderCard(course);
  }
}

export default CourseCard;
