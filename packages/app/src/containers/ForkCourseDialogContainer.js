import React, { Component } from "react";
import PropTypes from "prop-types";
import Composer from "react-composer";
import { Route, ForkCourseDialog } from "../components";
import { CourseProvider, FlashProvider, OverlayProvider } from "../providers";

export default class ForkCourseDialogContainer extends Component {
  static propTypes = {
    courseId: PropTypes.string
  };
  render() {
    const { courseId } = this.props;
    return (
      <Composer
        components={[
          <CourseProvider courseId={courseId} />,
          <Route />,
          <OverlayProvider />,
          <FlashProvider />
        ]}
      >
        {([{ course, fork }, { routeHandlers }, overlay, flash]) => {
          return (
            <ForkCourseDialog
              closeOverlay={overlay.close}
              forkCourse={async () => {
                const { data } = await fork({ courseId });
                const { curator, goal } = data.forkCourse;
                await flash.success(`you have forked: ${goal}`);
                await overlay.close();
                routeHandlers.goToCourse({ curator, goal });
              }}
            />
          );
        }}
      </Composer>
    );
  }
}
