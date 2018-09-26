import React, { Component } from "react";
import PropTypes from "prop-types";
import { Adopt } from "react-adopt";
import { identity, partial } from "ramda";
import View from "./View";
import { CourseProvider, OverlayProvider } from "../../providers";

const toggleCheckpoint = (
  updateStatus,
  { courseId, checkpointId, checked }
) => {
  updateStatus({ courseId, checkpointId, checked });
};

const mapper = {
  courseData: ({ curator, goal, render }) => (
    <CourseProvider courseQuery={{ curator, goal }}>{render}</CourseProvider>
  ),
  overlay: <OverlayProvider />
};

const mapProps = ({
  courseData: { course, userName, userIsCurator, updateStatus },
  overlay
}) => ({
  toggleCheckpoint: userName
    ? partial(toggleCheckpoint, [updateStatus])
    : identity,
  course,
  userName,
  userIsCurator,
  overlay: { constants: OverlayProvider.constants, ...overlay }
});

export default class Container extends Component {
  render() {
    const { match, handlers } = this.props;
    const { curator, goal, task } = match.params;
    return (
      <Adopt
        curator={curator}
        goal={goal}
        task={task}
        mapper={mapper}
        mapProps={mapProps}
      >
        {props => <View handlers={handlers} {...props} task={task} />}
      </Adopt>
    );
  }
}
