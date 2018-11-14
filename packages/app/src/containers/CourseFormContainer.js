import React, { Component } from "react";
import PropTypes from "prop-types";
import { Adopt } from "react-adopt";
import { Route, LoadingModal } from "../components";
import { CourseForm } from "@offcourse/organisms";
import { FlashProvider, CourseProvider, OverlayProvider } from "../providers";

const mapper = {
  courseData: ({ courseId, render }) => {
    return <CourseProvider courseId={courseId}>{render}</CourseProvider>;
  },
  route: <Route />,
  overlay: <OverlayProvider />,
  flash: <FlashProvider />
};

const mapProps = ({ courseData: { course, save }, route, overlay, flash }) => ({
  oldCourse: course,
  save,
  route,
  overlay,
  flash
});

export default class CourseFormContainer extends Component {
  static propTypes = {
    courseId: PropTypes.string
  };
  render() {
    const { courseId } = this.props;
    return (
      <Adopt courseId={courseId} mapper={mapper} mapProps={mapProps}>
        {({ overlay, flash, route, oldCourse, save }) => {
          if (oldCourse.loading) {
            return <LoadingModal />;
          }
          if (!courseId) {
            return (
              <CourseForm
                mode="create"
                onSubmit={async course => {
                  const { data } = await save(course);
                  const { goal, curator } = data.addCourse;
                  await flash.success(`you have saved: ${goal}`);
                  await overlay.close();
                  route.handlers.goToCourse({ curator, goal });
                }}
                onCancel={overlay.close}
              />
            );
          }
          if (courseId && oldCourse) {
            return (
              <CourseForm
                mode="edit"
                key={oldCourse.goal}
                course={oldCourse}
                onSubmit={async course => {
                  const { data } = await save({ ...course, courseId });
                  const { goal } = data.addCourse;
                  await flash.success(`you have saved: ${goal}`);
                  await overlay.close();
                }}
                onCancel={overlay.close}
              />
            );
          }
          return null;
        }}
      </Adopt>
    );
  }
}
