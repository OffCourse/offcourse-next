import React, { Component } from "react";
import PropTypes from "prop-types";
import { Adopt } from "react-adopt";
import { find, propEq } from "ramda";
import View from "./View";
import { CourseProvider, OverlayProvider } from "../../providers";
import { CourseNotFoundView } from "..";

const { SIGNING_IN, EDIT_COURSE, FORK_COURSE } = OverlayProvider.constants;

const mapActions = ({ userName, userIsCurator, course, overlay, handlers }) => {
  const { goToCourse } = handlers;
  const { goal, fork } = course;
  const { open } = overlay;
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
  return { onClick, label };
};

const mapper = {
  courseData: ({ curator, goal, render }) => (
    <CourseProvider courseQuery={{ curator, goal }}>{render}</CourseProvider>
  ),
  overlay: <OverlayProvider />
};

const mapProps = ({
  courseData: { course, userName, userIsCurator, toggleCheckpoint },
  overlay
}) => ({
  toggleCheckpoint,
  course,
  userIsCurator,
  userName,
  overlay
});

export default class Container extends Component {
  static propTypes = {
    match: PropTypes.object,
    handlers: PropTypes.object
  };

  render() {
    const { match, handlers } = this.props;
    const { curator, goal } = match.params;
    return (
      <Adopt
        handlers={handlers}
        curator={curator}
        goal={goal}
        mapper={mapper}
        mapProps={mapProps}
      >
        {({ course, toggleCheckpoint, userIsCurator, userName, overlay }) => {
          if (!course) {
            return <CourseNotFoundView goHome={handlers.goHome} />;
          }
          const action = mapActions({
            course,
            userIsCurator,
            userName,
            handlers,
            overlay
          });
          return (
            <View
              match={match}
              isLoggedIn={!!userName}
              handlers={handlers}
              action={action}
              course={course}
              toggleCheckpoint={toggleCheckpoint}
            />
          );
        }}
      </Adopt>
    );
  }
}
