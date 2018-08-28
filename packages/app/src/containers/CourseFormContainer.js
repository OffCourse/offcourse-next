import React, { Component } from "react";
import PropTypes from "prop-types";
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
        components={[
          <OverlayProvider />,
          <FlashProvider />,
          <Route />,
          <CourseProvider courseId={courseId} />
        ]}
      >
        {([overlay, flash, { routeHandlers }, cp]) => {
          return !courseId ? (
            <CourseForm
              mode="create"
              onSubmit={async course => {
                const { data } = await cp.save(course);
                const { goal, curator } = data.addCourse;
                await flash.success(`you have saved: ${goal}`);
                await overlay.close();
                routeHandlers.goToCourse({ curator, goal });
              }}
              onCancel={overlay.close}
            />
          ) : (
            <CourseForm
              mode="edit"
              course={cp.course}
              onSubmit={async course => {
                const { data } = await cp.save(course);
                const { goal } = data.addCourse;
                await flash.success(`you have saved: ${goal}`);
                await overlay.close();
              }}
              onCancel={overlay.close}
            />
          );
        }}
      </Composer>
    );
  }
}
