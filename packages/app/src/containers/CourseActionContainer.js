import React, { Component } from "react";
import PropTypes from "prop-types";
import Composer from "react-composer";
import { find, propEq } from "ramda";
import CourseAction from "../components/CourseAction";
import { CourseProvider, OverlayProvider } from "../providers";

const { EDIT_COURSE, FORK_COURSE } = OverlayProvider.constants;

class CourseActionContainer extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        courseId: PropTypes.string,
        curator: PropTypes.string,
        goal: PropTypes.string
      }).isRequired
    }).isRequired,
    routeHandlers: PropTypes.shape({
      goToCourse: PropTypes.func.isRequired
    }).isRequired
  };

  render() {
    const { match, routeHandlers } = this.props;
    const { courseId, curator, goal } = match.params;
    const { goToCourse } = routeHandlers;
    const courseQuery = { curator, goal };
    return (
      <Composer
        components={[
          <CourseProvider courseId={courseId} courseQuery={courseQuery} />,
          <OverlayProvider />
        ]}
      >
        {([{ userIsCurator, courseQuery, userName, course }, overlay]) => {
          const actions = [
            {
              condition: userIsCurator,
              onClick: () =>
                overlay.open({
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
                overlay.open({ mode: FORK_COURSE, courseId: course.courseId }),
              label: "Fork This Course"
            }
          ];

          const { onClick, label } = find(propEq("condition", true), actions);

          return <CourseAction onClick={onClick} label={label} />;
        }}
      </Composer>
    );
  }
}

export default CourseActionContainer;
