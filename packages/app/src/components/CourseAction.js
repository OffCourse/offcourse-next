import React, { Component } from "react";
import PropTypes from "prop-types";
import { find, propEq } from "ramda";
import { Group, Button } from "@offcourse/atoms";
import { sizes } from "@offcourse/constants";

const { LARGE } = sizes;

export default class CourseAction extends Component {
  static propTypes = {
    course: PropTypes.object.isRequired,
    userIsCurator: PropTypes.bool.isRequired,
    userName: PropTypes.string,
    overlay: PropTypes.object.isRequired,
    goToCourse: PropTypes.func.isRequired
  };

  render() {
    const { course, userIsCurator, userName, overlay, goToCourse } = this.props;
    const { goal, fork, status } = course;
    const { constants, open } = overlay;
    const { SIGNING_IN, EDIT_COURSE, FORK_COURSE } = constants;
    if (status === "loading") {
      return null;
    }
    const actions = [
      {
        condition: !userName,
        onClick: () =>
          open({
            mode: SIGNING_IN
          }),
        label: "Sign In To Edit"
      },
      {
        condition: userIsCurator,
        onClick: () =>
          open({
            mode: EDIT_COURSE,
            courseId: course.courseId
          }),
        label: "Edit This Course"
      },
      {
        condition: !!fork && !userIsCurator,
        onClick: () => goToCourse({ goal, curator: userName }),
        label: "Go To Fork"
      },
      {
        condition: !fork && !userIsCurator,
        onClick: () => open({ mode: FORK_COURSE, courseId: course.courseId }),
        label: "Fork This Course"
      }
    ];

    const { onClick, label } = find(propEq("condition", true), actions);
    return (
      <Group justifyContent="stretch" alignItems="center" mt={6}>
        <Button onClick={onClick} size={LARGE}>
          {label}
        </Button>
      </Group>
    );
  }
}
