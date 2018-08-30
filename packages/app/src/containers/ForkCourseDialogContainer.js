import React, { Component } from "react";
import PropTypes from "prop-types";
import { Adopt } from "react-adopt";
import { Route, ForkCourseDialog } from "../components";
import { CourseProvider, FlashProvider, OverlayProvider } from "../providers";

const mapper = {
  courseData: ({ courseId, render }) => (
    <CourseProvider courseId={courseId}>{render}</CourseProvider>
  ),
  route: <Route />,
  overlay: <OverlayProvider />,
  flash: <FlashProvider />
};

const mapProps = ({ courseData: { course, fork }, route, overlay, flash }) => ({
  course,
  fork,
  route,
  overlay,
  flash
});

export default class ForkCourseDialogContainer extends Component {
  static propTypes = {
    courseId: PropTypes.string
  };
  render() {
    const { courseId } = this.props;
    return (
      <Adopt courseId={courseId} mapper={mapper} mapProps={mapProps}>
        {({ course, fork, route, overlay, flash }) => {
          return (
            <ForkCourseDialog
              closeOverlay={overlay.close}
              forkCourse={async () => {
                const { data } = await fork({ courseId });
                const { curator, goal } = data.forkCourse;
                await flash.success(`you have forked: ${goal}`);
                await overlay.close();
                route.handlers.goToCourse({ curator, goal });
              }}
            />
          );
        }}
      </Adopt>
    );
  }
}
