import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import Composer from "react-composer";
import { Route, ForkCourseDialog, LoadingModal } from "../components";
import { CourseForm } from "@offcourse/organisms";
import { CourseProvider, OverlayProvider } from "../providers";

export default class CourseFormContainer extends Component {
  static propTypes = {
    courseId: PropTypes.string.isRequired,
    closeOverlay: PropTypes.func.isRequired
  };
  render() {
    const { courseId, closeOverlay } = this.props;
    if (!courseId) {
      return (
        <CourseForm mode="create" onSubmit={identity} onCancel={closeOverlay} />
      );
    }
    return (
      <Composer
        components={[
          <CourseProvider courseId={courseId} />,
          <Route />,
          <OverlayProvider />
        ]}
      >
        {([{ course, userIsCurator, fork }, { routeHandlers }, overlay]) => {
          if (userIsCurator) {
            return (
              <CourseForm
                mode="edit"
                course={course}
                onSubmit={identity}
                onCancel={closeOverlay}
              />
            );
          }
          if (!course.fork) {
            return (
              <ForkCourseDialog
                closeOverlay={closeOverlay}
                forkCourse={async () => {
                  const { data } = await fork({ courseId });
                  const { curator, goal } = data.forkCourse;
                  await overlay.close();
                  routeHandlers.goToCourse({ curator, goal });
                }}
              />
            );
          }
          return <LoadingModal />;
        }}
      </Composer>
    );
  }
}
