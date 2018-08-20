import React, { Component } from "react";
import PropTypes from "prop-types";
import Composer from "react-composer";
import { find, propEq } from "ramda";
import { goToCourse } from "../tempUtils";
import CourseAction from "../components/CourseAction";
import { CourseProvider, OverlayProvider } from "../providers";

const { EDIT_COURSE } = OverlayProvider.constants;

class CourseActionContainer extends Component {
  static propTypes = {
    courseQuery: PropTypes.shape({
      curator: PropTypes.string.isRequired,
      goal: PropTypes.string.isRequired
    })
  };

  render() {
    const { courseQuery } = this.props;
    return (
      <Composer
        components={[
          <CourseProvider courseQuery={courseQuery} />,
          <OverlayProvider />
        ]}
      >
        {([{ userIsCurator, courseQuery, userName, course }, overlay]) => {
          const actions = [
            {
              condition: userIsCurator,
              onClick: () =>
                overlay.open({
                  variables: {
                    mode: EDIT_COURSE,
                    courseId: course.courseId
                  }
                }),
              label: "Edit Course"
            },
            {
              condition: !!course.fork && !userIsCurator,
              onClick: () => goToCourse({ ...courseQuery, curator: userName }),
              label: "Go To Fork"
            },
            {
              condition: !course.fork && !userIsCurator,
              onClick: () => console.log("working on it"),
              label: "Fork Course"
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
