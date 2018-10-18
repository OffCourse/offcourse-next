import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { ExpandableCard as Card } from "@offcourse/molecules";
import { Header, Meta } from "./sections";
export default class CheckpointCard extends Component {
  static propTypes = {
    checkpoint: PropTypes.object,
    onCheckpointClick: PropTypes.func,
    onCheckpointToggle: PropTypes.func,
    checkable: PropTypes.bool,
    status: PropTypes.string
  };

  static defaultProps = {
    level: 1,
    onCheckpointClick: identity,
    onCheckpointToggle: identity,
    layout: [
      ["header"],
      ["header", "meta"],
      ["header", "resource"],
      ["breadcrumbs-header", "resource"]
    ]
  };

  handleCourseClick = () => {
    const { onCourseClick, checkpoint } = this.props;
    const { course } = checkpoint;
    const { goal, curator } = course;
    onCourseClick({ goal, curator });
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
    const { status, checkable, checkpoint, pt, level, layout } = this.props;
    const { tags, task, resource, completed, checkpointId } = checkpoint;

    return (
      <Card
        key={`${checkpointId}-${completed}`}
        layout={layout}
        initialLevel={level}
        expandable={false}
        pt={pt}
        inactive={level === 0 || status === "loading"}
        px={0}
        mb={6}
      >
        <Header
          section="header"
          task={task}
          completed={completed}
          checkable={checkable}
          onClick={this.handleCheckpointClick}
          onToggle={this.handleCheckpointToggle}
          px={0}
          pb={0}
        />
        <Meta
          section="meta"
          resourceType={resource ? resource.resourceType : "unknown"}
          tags={tags || []}
          px={0}
        />
      </Card>
    );
  }
}
