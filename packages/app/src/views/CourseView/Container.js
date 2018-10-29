import React, { Component } from "react";
import PropTypes from "prop-types";
import { Adopt } from "react-adopt";
import { identity, partial, prop, over } from "ramda";
import View from "./View";
import { CourseProvider, OverlayProvider } from "../../providers";
import { NotFound } from "../../components";

const toggleCheckpoint = (
  updateStatus,
  { courseId, checkpointId, checked }
) => {
  updateStatus({ courseId, checkpointId, checked });
};

/* eslint: disable */
const mapper = {
  courseData: ({ curator, goal, render }) => (
    <CourseProvider courseQuery={{ curator, goal }}>{render}</CourseProvider>
  ),
  overlay: <OverlayProvider />
};
/* eslint: enable */

const mapProps = ({
  courseData: { course, userName, userIsCurator, updateStatus },
  overlay
}) => ({
  toggleCheckpoint: userName
    ? partial(toggleCheckpoint, [updateStatus])
    : identity,
  course,
  userIsCurator,

  overlay: { constants: OverlayProvider.constants, ...overlay }
});

export default class Container extends Component {
  render() {
    const { match, handlers } = this.props;
    const { curator, goal } = match.params;
    return (
      <Adopt curator={curator} goal={goal} mapper={mapper} mapProps={mapProps}>
        {({ course, toggleCheckpoint, userIsCurator, overlay }) => {
          if (!course) {
            return <NotFound goHome={handlers.goHome} />;
          }
          return (
            <View
              handlers={handlers}
              course={course}
              overlay={overlay}
              toggleCheckpoint={toggleCheckpoint}
              userIsCurator={userIsCurator}
            />
          );
        }}
      </Adopt>
    );
  }
}
