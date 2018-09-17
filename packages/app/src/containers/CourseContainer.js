import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity, partial } from "ramda";
import { Adopt } from "react-adopt";
import { CourseCard } from "@offcourse/organisms";
import { CourseProvider, FlashProvider } from "../providers";

const toggleCheckpoint = (
  updateStatus,
  flash,
  { courseId, task, checkpointId, checked }
) => {
  updateStatus({ courseId, checkpointId, checked });
  checked
    ? flash.success(`you completed: ${task}`)
    : flash.info(`you unchecked: ${task}`);
};

const mapper = {
  courseData: ({ curator, goal, render }) => (
    <CourseProvider courseQuery={{ curator, goal }}>{render}</CourseProvider>
  ),
  flash: <FlashProvider />
};

const mapProps = ({
  courseData: { course, userName, updateStatus },
  flash
}) => ({
  toggleCheckpoint: userName
    ? partial(toggleCheckpoint, [updateStatus, flash])
    : identity,
  course,
  flash
});

class CourseContainer extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        courseId: PropTypes.string,
        curator: PropTypes.string,
        goal: PropTypes.string
      }).isRequired
    }).isRequired,
    handlers: PropTypes.shape({
      goToCollection: PropTypes.func.isRequired,
      goToCourse: PropTypes.func.isRequired,
      goToCheckpoint: PropTypes.func.isRequired
    }).isRequired
  };

  render() {
    const { match, handlers } = this.props;
    const { curator, goal } = match.params;
    const { goToCollection, goToCourse, goToCheckpoint } = handlers;
    return (
      <Adopt curator={curator} goal={goal} mapper={mapper} mapProps={mapProps}>
        {({ toggleCheckpoint, course }) => (
          <CourseCard
            onCuratorClick={goToCollection}
            onGoalClick={goToCourse}
            onCheckpointClick={goToCheckpoint}
            onCheckpointToggle={toggleCheckpoint}
            onTagClick={goToCollection}
            course={course}
          />
        )}
      </Adopt>
    );
  }
}

export default CourseContainer;
