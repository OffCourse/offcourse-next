import React, { Component } from "react";
import PropTypes from "prop-types";
import { map } from "ramda";
import { Card, Icon, Group } from "@offcourse/atoms";
import { CourseCard, CheckpointCard } from "@offcourse/organisms";
import { Curator, Description } from "@offcourse/molecules";
import { MasterDetail, Header, CourseAction } from "../../components";
import { sizes } from "@offcourse/constants";

const { LARGE } = sizes;

export default class View extends Component {
  static propTypes = {
    toggleCheckpoint: PropTypes.func.isRequired,
    userName: PropTypes.string,
    handlers: PropTypes.object.isRequired,
    course: PropTypes.object.isRequired
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
    const { goToCheckpoint, goToCollection, goToCourse } = handlers;
    const {
      description,
      profileUrl,
      avatarUrl,
      status,
      goal,
      curator
    } = course;
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
        <Detail justifyContent="stretch" alignItems="stretch">
          <Group
            flex="none"
            alignItems="flex"
            display={["flex", "none", "none"]}
          >
            <CourseCard
              onCuratorClick={goToCollection}
              onGoalClick={goToCourse}
              onCheckpointClick={goToCheckpoint}
              width="100%"
              borderBottom="none"
              layout={[["header", "meta", "description"]]}
              onCheckpointToggle={userName ? toggleCheckpoint : null}
              onTagClick={goToCollection}
              course={course}
              expandable={false}
            />
            <Group
              alignItems="stretch"
              justifyContent="center"
              px={6}
              pt={0}
              mb={6}
            >
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
                  status={course.status}
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
