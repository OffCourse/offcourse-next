import React, { Component } from "react";
import PropTypes from "prop-types";
import { map } from "ramda";
import { CheckpointCard, CourseCard } from "@offcourse/organisms";
import { CheckpointsProvider } from "../../providers";
import { LinkGroup } from "@offcourse/molecules";
import {
  MasterDetail,
  CheckpointCard as CC,
  CourseAction
} from "../../components";

const Link = LinkGroup.Link;

export default class View extends Component {
  static propTypes = {
    toggleCheckpoint: PropTypes.func.isRequired,
    userIsCurator: PropTypes.bool,
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
    const { checkpoints, status } = course;
    if (status === "Not Found") {
      return <div>NOT FOUND</div>;
    }

    return (
      <MasterDetail>
        <Master>
          <CourseCard
            onCuratorClick={goToCollection}
            onGoalClick={goToCourse}
            onCheckpointClick={goToCheckpoint}
            layout={[["header", "meta", "description", "social"]]}
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
        <Detail alignItems="flex-start" pt={6} px={["1rem", "1rem", 0]}>
          <CheckpointsProvider courseId={course.courseId}>
            {checkpoints => {
              return JSON.stringify(checkpoints, null, 2);
            }}
            {/* {map(checkpoint => {
            return (
              <CheckpointCard
                status={course.status}
                level={checkpoint.completed ? 0 : 1}
                checkable={!!userName}
                onCheckpointToggle={toggleCheckpoint}
                onCheckpointClick={goToCheckpoint}
                checkpoint={{ course, ...checkpoint }}
                key={checkpoint.checkpointId}
              />
            );
          }, checkpoints)} */}
          </CheckpointsProvider>
        </Detail>
      </MasterDetail>
    );
  }
}
