import React, { Component } from "react";
import { MasterDetail, CourseAction, CheckpointCard } from "../../components";
import { CourseCard } from "@offcourse/organisms";
import PropTypes from "prop-types";

export default class CheckpointView extends Component {
  static propTypes = {
    toggleCheckpoint: PropTypes.func.isRequired,
    userIsCurator: PropTypes.bool.isRequired,
    userName: PropTypes.string,
    handlers: PropTypes.object.isRequired,
    course: PropTypes.object.isRequired,
    overlay: PropTypes.object.isRequired
  };

  render() {
    const { Master, Detail } = MasterDetail;
    const {
      toggleCheckpoint,
      userIsCurator,
      userName,
      handlers,
      course,
      overlay
    } = this.props;
    const { goToCheckpoint, goToCollection, goToCourse } = handlers;
    const { checkpoint } = course;
    return (
      <MasterDetail>
        <Master>
          <CourseCard
            onCuratorClick={goToCollection}
            onGoalClick={goToCourse}
            onCheckpointClick={goToCheckpoint}
            onCheckpointToggle={userName ? toggleCheckpoint : null}
            onTagClick={goToCollection}
            course={course}
          />
          <CourseAction
            userIsCurator={userIsCurator}
            userName={userName}
            course={course}
            overlay={overlay}
            goToCourse={goToCourse}
          />
        </Master>
        <Detail>
          <CheckpointCard
            pt={6}
            level={2}
            status={course.status}
            checkable={!!userName}
            onCourseClick={goToCourse}
            onCheckpointToggle={toggleCheckpoint}
            onCheckpointClick={goToCheckpoint}
            checkpoint={{ course, ...checkpoint }}
            key={`${checkpoint.checkpointId}-${checkpoint.completed}`}
          />
        </Detail>
      </MasterDetail>
    );
  }
}
