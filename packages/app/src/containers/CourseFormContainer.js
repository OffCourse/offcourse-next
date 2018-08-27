import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import Composer from "react-composer";
import { Route } from "../components";
import { CourseForm } from "@offcourse/organisms";
import { FlashProvider, CourseProvider, OverlayProvider } from "../providers";

export default class CourseFormContainer extends Component {
  static propTypes = {
    courseId: PropTypes.string
  };
  render() {
    const { courseId } = this.props;
    return (
      <Composer
        components={[<OverlayProvider />, <FlashProvider />, <Route />]}
      >
        {([overlay, flash, { routeHandlers }]) => {
          if (!courseId) {
            return (
              <CourseForm
                mode="create"
                onSubmit={identity}
                onCancel={overlay.close}
              />
            );
          }
          return (
            <CourseProvider courseId={courseId}>
              {({ course, userName, save }) => {
                return (
                  <CourseForm
                    mode="edit"
                    course={course}
                    onSubmit={async course => {
                      const { data } = await save(course);
                      const { goal } = data.addCourse;
                      await flash.success(`you have saved: ${goal}`);
                      await overlay.close();
                    }}
                    onCancel={overlay.close}
                  />
                );
              }}
            </CourseProvider>
          );
        }}
      </Composer>
    );
  }
}
