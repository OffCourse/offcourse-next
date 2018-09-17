import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { Adopt } from "react-adopt";
import { CourseCard } from "@offcourse/organisms";
import {
  CourseCardProvider,
  CourseProvider,
  FlashProvider
} from "../providers";

const mapper = {
  courseData: ({ courseId, curator, goal, render }) => (
    <CourseProvider courseId={courseId} courseQuery={{ curator, goal }}>
      {render}
    </CourseProvider>
  ),
  courseCard: <CourseCardProvider />,
  flash: <FlashProvider />
};

const mapProps = ({
  courseData: { course, userName, updateStatus },
  courseCard,
  flash
}) => ({
  updateStatus: userName ? updateStatus : identity,
  course,
  courseCard,
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
    const { courseId, curator, goal } = match.params;
    const { goToCollection, goToCourse, goToCheckpoint } = handlers;
    return (
      <Adopt
        curator={curator}
        goal={goal}
        courseId={courseId}
        mapper={mapper}
        mapProps={mapProps}
      >
        {({ updateStatus, course, courseCard, flash }) => (
          <CourseCard
            key={courseCard.initialLevel}
            layout={courseCard.layout}
            initialLevel={courseCard.initialLevel}
            onCuratorClick={goToCollection}
            onGoalClick={goToCourse}
            onCheckpointClick={goToCheckpoint}
            onCheckpointToggle={({ courseId, task, checkpointId, checked }) => {
              updateStatus({ courseId, checkpointId, checked });
              checked
                ? flash.success(`you completed: ${task}`)
                : flash.info(`you unchecked: ${task}`);
            }}
            onTagClick={goToCollection}
            course={course}
          />
        )}
      </Adopt>
    );
  }
}

export default CourseContainer;
