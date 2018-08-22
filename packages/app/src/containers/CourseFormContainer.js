import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import Composer from "react-composer";
import { ForkCourseDialog } from "../components";
import { CourseForm } from "@offcourse/organisms";
import { CourseProvider } from "../providers";

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
      <Composer components={[<CourseProvider courseId={courseId} />]}>
        {([{ course, userIsCurator, forkCourse }]) => {
          return !course.fork && !userIsCurator ? (
            <ForkCourseDialog
              closeOverlay={closeOverlay}
              forkCourse={forkCourse}
            />
          ) : (
            <CourseForm
              mode="edit"
              course={course}
              onSubmit={identity}
              onCancel={closeOverlay}
            />
          );
        }}
      </Composer>
    );
  }
}
