import React, { Component } from "react";
import PropTypes from "prop-types";
import { CourseCard } from "@offcourse/organisms";
import { MasterDetail, CourseAction } from ".";

export default class CourseDetailLayout extends Component {
  static propTypes = {
    toggleCheckpoint: PropTypes.func.isRequired,
    userName: PropTypes.string,
    handlers: PropTypes.object.isRequired,
    course: PropTypes.object.isRequired,
    userIsCurator: PropTypes.bool,
    overlay: PropTypes.object,
    children: PropTypes.node
  };

  render() {
    const { Master, Detail } = MasterDetail;
    const {
      toggleCheckpoint,
      userName,
      handlers,
      userIsCurator,
      overlay,
      course,
      children
    } = this.props;
    const { goToCheckpoint, goToCollection, goToCourse } = handlers;
    return (
      <MasterDetail>
        <Master>
          <CourseCard
            onCuratorClick={goToCollection}
            onGoalClick={goToCourse}
            onCheckpointClick={goToCheckpoint}
            layout={[["header", "meta", "description"]]}
            onCheckpointToggle={userName ? toggleCheckpoint : null}
            onTagClick={goToCollection}
            course={course}
            expandable={false}
          />
          <CourseAction
            userIsCurator={userIsCurator}
            userName={userName}
            course={course}
            overlay={overlay}
            goToCourse={goToCourse}
          />
        </Master>
        <Detail>{children}</Detail>
      </MasterDetail>
    );
  }
}
