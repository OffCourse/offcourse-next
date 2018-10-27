import React, { Component } from "react";
import {
  MasterDetail,
  ErrorBoundary,
  CourseAction,
  Loading,
  CheckpointCard,
  NotFound
} from "../../components";
import { CourseCard } from "@offcourse/organisms";
import PropTypes from "prop-types";
import { CheckpointProvider } from "../../providers";

export default class CheckpointView extends Component {
  static propTypes = {
    toggleCheckpoint: PropTypes.func.isRequired,
    userIsCurator: PropTypes.bool,
    userName: PropTypes.string,
    handlers: PropTypes.object.isRequired,
    course: PropTypes.object.isRequired,
    task: PropTypes.string.isRequired,
    overlay: PropTypes.object.isRequired
  };

  render() {
    const { Master, Detail } = MasterDetail;
    const {
      toggleCheckpoint,
      userName,
      handlers,
      course,
      userIsCurator,
      overlay,
      task
    } = this.props;
    const { goHome, goToCheckpoint, goToCollection, goToCourse } = handlers;
    const { curator, goal, status } = course;
    if (status === "Not Found") {
      return <NotFound goHome={goHome} />;
    }

    return (
      <MasterDetail>
        <Master>
          <CourseCard
            onCuratorClick={goToCollection}
            onGoalClick={goToCourse}
            onCheckpointClick={goToCheckpoint}
            onCheckpointToggle={userName ? toggleCheckpoint : null}
            layout={[["header", "meta", "checkpoints", "social"]]}
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
          <ErrorBoundary>
            {status === "loading" ? (
              <Loading />
            ) : (
              <CheckpointProvider
                userName={userName}
                checkpointQuery={{ curator, goal, task }}
              >
                {({ checkpoint }) => {
                  return (
                    <CheckpointCard
                      pt={6}
                      level={2}
                      status={status}
                      checkable={!!userName}
                      onCourseClick={goToCourse}
                      onCheckpointToggle={toggleCheckpoint}
                      onCheckpointClick={goToCheckpoint}
                      checkpoint={checkpoint}
                      key={`${checkpoint.checkpointId}-${checkpoint.completed}`}
                    />
                  );
                }}
              </CheckpointProvider>
            )}
          </ErrorBoundary>
        </Detail>
      </MasterDetail>
    );
  }
}
