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
      })
    }),
    history: PropTypes.object
  };

  goToCollection = ({ curator, tag }) => {
    const { history } = this.props;
    history.push(tag ? `/tag/${tag}` : `/curator/${curator}`);
  };
  goToCourse = ({ curator, goal }) => {
    const { history } = this.props;
    history.push(`/curator/${curator}/goal/${goal}`);
  };
  goToCheckpoint = ({ curator, goal, task }) => {
    const { history } = this.props;
    history.push(`/curator/${curator}/goal/${goal}/task/${task}`);
  };

  render() {
    const { courseId, curator, goal } = this.props.match.params;
    const courseQuery = { curator, goal };
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
            onCuratorClick={this.goToCollection}
            onGoalClick={this.goToCourse}
            onCheckpointClick={this.goToCheckpoint}
            onCheckpointToggle={userName ? updateStatus : null}
            onTagClick={this.goToCollection}
            course={course}
          />
        )}
      </Composer>
    );
  }
}

export default CourseContainer;
