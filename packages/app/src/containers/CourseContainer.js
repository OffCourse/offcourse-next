import React, { Component } from "react";
import PropTypes from "prop-types";
import Composer from "react-composer";
import { CourseCard } from "@offcourse/organisms";
import {
  CourseCardProvider,
  CourseProvider,
  FlashProvider
} from "../providers";

class CourseContainer extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        courseId: PropTypes.string,
        curator: PropTypes.string,
        goal: PropTypes.string
      }).isRequired
    }).isRequired,
    routeHandlers: PropTypes.shape({
      goToCollection: PropTypes.func.isRequired,
      goToCourse: PropTypes.func.isRequired,
      goToCheckpoint: PropTypes.func.isRequired
    }).isRequired
  };

  render() {
    const { match, routeHandlers } = this.props;
    const { courseId, curator, goal } = match.params;
    const courseQuery = { curator, goal };
    const { goToCollection, goToCourse, goToCheckpoint } = routeHandlers;
    return (
      <Composer
        components={[
          <CourseProvider courseId={courseId} courseQuery={courseQuery} />,
          <CourseCardProvider />,
          <FlashProvider />
        ]}
      >
        {([course, card, flash]) => {
          if (!course.course) {
            return <div>HELLO</div>;
          }
          const updateStatus = ({
            courseId,
            task,
            goal,
            checkpointId,
            checked
          }) => {
            course.updateStatus({ courseId, checkpointId, checked });
            checked
              ? flash.success(`you completed: ${task}`)
              : flash.info(`you unchecked: ${task}`);
          };
          return (
            <CourseCard
              key={card.initialLevel}
              layout={card.layout}
              initialLevel={card.initialLevel}
              onCuratorClick={goToCollection}
              onGoalClick={goToCourse}
              onCheckpointClick={goToCheckpoint}
              onCheckpointToggle={course.userName ? updateStatus : null}
              onTagClick={goToCollection}
              course={course.course}
            />
          );
        }}
      </Composer>
    );
  }
}

export default CourseContainer;
