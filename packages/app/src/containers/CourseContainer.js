import React, { Component } from "react";
import PropTypes from "prop-types";
import Composer from "react-composer";
import { CourseCard } from "@offcourse/organisms";
import { CourseCardProvider, CourseProvider } from "../providers";

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
          <CourseCardProvider />
        ]}
      >
        {([{ userName, course, updateStatus }, card]) => (
          <CourseCard
            key={card.initialLevel}
            layout={card.layout}
            initialLevel={card.initialLevel}
            onCuratorClick={goToCollection}
            onGoalClick={goToCourse}
            onCheckpointClick={goToCheckpoint}
            onCheckpointToggle={userName ? updateStatus : null}
            onTagClick={goToCollection}
            course={course}
          />
        )}
      </Composer>
    );
  }
}

export default CourseContainer;
