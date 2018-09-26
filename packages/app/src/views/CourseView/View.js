import React, { Component } from "react";
import PropTypes from "prop-types";
import { map, sortWith, prop, ascend, sort } from "ramda";
import { CourseCard } from "@offcourse/organisms";
import { LinkGroup } from "@offcourse/molecules";
import { MasterDetail, CheckpointCard, CourseAction } from "../../components";

const Link = LinkGroup.Link;

export default class View extends Component {
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
    const { checkpoints } = course;
    const sortedCheckpoints = sortWith(
      [ascend(prop("completed"))],
      checkpoints
    );

    return (
      <MasterDetail>
        <Master>
          <CourseCard
            onCuratorClick={goToCollection}
            onGoalClick={goToCourse}
            onCheckpointClick={goToCheckpoint}
            layout={[["header", "meta", "description", "tags", "social"]]}
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
          {map(checkpoint => {
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
          }, checkpoints)}
        </Detail>
      </MasterDetail>
    );
  }
}
