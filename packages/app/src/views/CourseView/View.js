import React, { Component } from "react";
import PropTypes from "prop-types";
import { map } from "ramda";
import { Icon, Group } from "@offcourse/atoms";
import { CourseCard, CheckpointCard } from "@offcourse/organisms";
import { MasterDetail, NotFoundScreen, CourseAction } from "../../components";
import { sizes } from "@offcourse/constants";

const { LARGE } = sizes;

export default class View extends Component {
  static propTypes = {
    toggleCheckpoint: PropTypes.func.isRequired,
    userName: PropTypes.string,
    handlers: PropTypes.object.isRequired,
    course: PropTypes.object.isRequired,
    userIsCurator: PropTypes.bool,
    overlay: PropTypes.object
  };

  render() {
    const { Master, Detail } = MasterDetail;
    const {
      toggleCheckpoint,
      userName,
      handlers,
      userIsCurator,
      overlay,
      course
    } = this.props;
    const { goHome, goToCheckpoint, goToCollection, goToCourse } = handlers;
    const { status } = course;
    if (status === "Not Found") {
      return <NotFoundScreen goHome={goHome} />;
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
        <Detail justifyContent="stretch" alignItems="stretch">
          <Group
            flex="none"
            alignItems="flex"
            p={6}
            display={["flex", "none", "none"]}
          >
            <CourseCard
              onCuratorClick={goToCollection}
              onGoalClick={goToCourse}
              onCheckpointClick={goToCheckpoint}
              width="100%"
              borderBottom="none"
              headerIcon={
                <Icon
                  onClick={goHome}
                  size={LARGE}
                  color="grayScale.2"
                  name="remove"
                />
              }
              layout={[["header", "meta", "description"]]}
              onCheckpointToggle={userName ? toggleCheckpoint : null}
              onTagClick={goToCollection}
              course={course}
              expandable={false}
            />
            <Group alignItems="stretch" justifyContent="center" px={6} pt={0}>
              <CourseAction
                userIsCurator={userIsCurator}
                userName={userName}
                course={course}
                overlay={overlay}
                goToCourse={goToCourse}
              />
            </Group>
          </Group>
          <Group my={6} px={6}>
            {map(checkpoint => {
              return (
                <CheckpointCard
                  status={status}
                  level={checkpoint.completed ? 0 : 1}
                  checkable={!!userName}
                  width="100%"
                  onCheckpointToggle={toggleCheckpoint}
                  onCheckpointClick={goToCheckpoint}
                  checkpoint={{ course, ...checkpoint }}
                  key={checkpoint.checkpointId}
                />
              );
            }, course.checkpoints)}
          </Group>
        </Detail>
      </MasterDetail>
    );
  }
}
