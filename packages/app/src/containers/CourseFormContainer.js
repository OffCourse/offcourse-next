import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import Composer from "react-composer";
import { Route } from "../components";
import { CourseForm } from "@offcourse/organisms";
import { CourseProvider, OverlayProvider } from "../providers";

export default class CourseFormContainer extends Component {
  static propTypes = {
    courseId: PropTypes.string
  };
  render() {
    const { courseId } = this.props;
    return (
      <Composer components={[<OverlayProvider />, <Route />]}>
        {([overlay, { routeHandlers }]) => {
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
              {({ course }) => {
                return (
                  <CourseForm
                    mode="edit"
                    course={course}
                    onSubmit={identity}
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
