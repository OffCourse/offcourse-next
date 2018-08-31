import React, { Component } from "react";
import PropTypes from "prop-types";
import { Adopt } from "react-adopt";
import { find, propEq } from "ramda";
import CourseAction from "../components/CourseAction";
import { CourseProvider, OverlayProvider } from "../providers";

const { SIGNING_IN, EDIT_COURSE, FORK_COURSE } = OverlayProvider.constants;

const mapper = {
  course: ({ courseId, curator, goal, render }) => {
    const courseQuery = { curator, goal };
    return (
      <CourseProvider courseId={courseId} courseQuery={courseQuery}>
        {render}
      </CourseProvider>
    );
  },
  overlay: <OverlayProvider />
};

class CourseActionContainer extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        courseId: PropTypes.string,
        curator: PropTypes.string,
        goal: PropTypes.string
      }).isRequired
    }).isRequired,
    handlers: PropTypes.shape({
      goToCourse: PropTypes.func.isRequired
    }).isRequired
  };

  render() {
    const { match, handlers } = this.props;
    const { courseId, curator, goal } = match.params;
    const { goToCourse } = handlers;
    return (
      <Adopt courseId={courseId} curator={curator} goal={goal} mapper={mapper}>
        {({
          course: { userIsCurator, courseQuery, userName, course },
          overlay: { open }
        }) => {
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
              condition: !!course.fork && !userIsCurator,
              onClick: () => goToCourse({ goal, curator: userName }),
              label: "Go To Fork"
            },
            {
              condition: !course.fork && !userIsCurator,
              onClick: () =>
                open({ mode: FORK_COURSE, courseId: course.courseId }),
              label: "Fork This Course"
            }
          ];

          const { onClick, label } = find(propEq("condition", true), actions);

          return <CourseAction onClick={onClick} label={label} />;
        }}
      </Adopt>
    );
  }
}

export default CourseActionContainer;
