import React, { Component } from "react";
import PropTypes from "prop-types";
import { map, filter } from "ramda";
import { Group } from "@offcourse/atoms";
import { CourseCard } from "@offcourse/organisms";
import { LinkGroup } from "@offcourse/molecules";
import {
  MasterDetail,
  Sheet,
  CheckpointItem,
  CourseAction
} from "../../components";

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
    const upcoming = filter(cp => !cp.completed, checkpoints);

    return (
      <MasterDetail>
        <Master>
          <CourseCard
            onCuratorClick={goToCollection}
            onGoalClick={goToCourse}
            onCheckpointClick={goToCheckpoint}
            onCheckpointToggle={toggleCheckpoint}
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
        <Detail alignItems="flex-start" py="1.5rem" px={["1rem", "1rem", 0]}>
          <LinkGroup py="1rem" px="1rem">
            <Link>Open</Link>
            <Link>Completed</Link>
            <Link>All</Link>
          </LinkGroup>
          {map(cp => {
            return (
              <Sheet px={["1rem", "3rem", "4rem"]} mt={6}>
                <CheckpointItem
                  goToCollection={goToCollection}
                  goToCheckpoint={() => {
                    goToCheckpoint({
                      curator: course.curator,
                      goal: course.goal,
                      task: cp.task
                    });
                  }}
                  checkpoint={cp}
                />
              </Sheet>
            );
          }, upcoming)}
        </Detail>
      </MasterDetail>
    );
  }
}
