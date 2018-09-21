import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { ExpandableCard as Card } from "@offcourse/molecules";
import HeaderSection from "./HeaderSection";
import ResourceSection from "./resourceSection";

export default class CheckpointCard extends Component {
  static propTypes = {
    checkpoint: PropTypes.object,
    onCheckpointClick: PropTypes.func,
    onCheckpointToggle: PropTypes.func,
    checkable: PropTypes.bool,
    status: PropTypes.string
  };

  static defaultProps = {
    onCheckpointClick: identity,
    onCheckpointToggle: identity
  };

  handleCheckpointClick = () => {
    const { onCheckpointClick, checkpoint } = this.props;
    const { task, course } = checkpoint;
    const { goal, curator } = course;
    onCheckpointClick({ goal, task, curator });
  };

  handleCheckpointToggle = ({ checked }) => {
    const { onCheckpointToggle, checkpoint } = this.props;
    const { task, course, checkpointId } = checkpoint;
    const { courseId, goal } = course;
    onCheckpointToggle({
      courseId,
      checkpointId,
      goal,
      task,
      checked
    });
  };

  render() {
    const { status, checkable, checkpoint } = this.props;
    const { task, resource, completed, checkpointId } = checkpoint;

    return (
      <Card
        key={`${checkpointId}-${completed}`}
        initialLevel={completed ? 0 : 1}
        layout={[["header"], ["header", "resource"]]}
        expandable={false}
        onClick={this.handleCheckpointClick}
        pl={8}
        inactive={completed || status === "loading"}
        mt={6}
      >
        <HeaderSection
          section="header"
          task={task}
          completed={completed}
          checkable={checkable}
          onToggle={this.handleCheckpointToggle}
        />
        {resource && <ResourceSection section="resource" {...resource} />}
      </Card>
    );
  }
}
