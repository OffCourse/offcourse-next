import React, { Component } from "react";
import PropTypes from "prop-types";
import { Adopt } from "react-adopt";
import { identity, partial, over } from "ramda";
import View from "./View";
import {
  CourseProvider,
  FlashProvider,
  OverlayProvider
} from "../../providers";

const toggleCheckpoint = (
  updateStatus,
  flash,
  { courseId, task, checkpointId, checked }
) => {
  updateStatus({ courseId, checkpointId, checked });
  checked
    ? flash.success(`you completed: ${task}`)
    : flash.info(`you unchecked: ${task}`);
};

const mapper = {
  courseData: ({ curator, goal, render }) => (
    <CourseProvider courseQuery={{ curator, goal }}>{render}</CourseProvider>
  ),
  overlay: <OverlayProvider />,
  flash: <FlashProvider />
};

const mapProps = ({
  courseData: { course, userName, userIsCurator, updateStatus },
  flash,
  overlay
}) => ({
  toggleCheckpoint: userName
    ? partial(toggleCheckpoint, [updateStatus, flash])
    : identity,
  course,
  userName,
  userIsCurator,
  flash,
  overlay: { constants: OverlayProvider.constants, ...overlay }
});

export default class Container extends Component {
  render() {
    const { match, handlers } = this.props;
    const { curator, goal } = match.params;
    return (
      <Adopt curator={curator} goal={goal} mapper={mapper} mapProps={mapProps}>
        {props => <View handlers={handlers} {...props} />}
      </Adopt>
    );
  }
}
