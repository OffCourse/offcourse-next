import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { Group } from "@offcourse/atoms";
import { ExpandableCard as Card } from "@offcourse/molecules";
import HeaderSection from "./HeaderSection";
import ResourceSection from "./ResourceSection";
import titleCase from "voca/title_case";
import system from "system-components";

const BCText = system({
  is: "a",
  m: 0,
  mb: 3,
  lineHeight: 1,
  fontSize: 1

}).extend`
&:hover {
  color: ${props => props.theme.colors.primary}
}
`;

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
    const { task, resource, course, completed, checkpointId } = checkpoint;

    return (
      <Card
        key={`${checkpointId}-${completed}`}
        layout={layout}
        initialLevel={level}
        expandable={false}
        pt={pt}
        inactive={level === 0 || status === "loading"}
        mb={6}
      >
        <Group alignItems="stretch" section="breadcrumbs-header">
          <Group mb={4} alignItems="flex-start">
            <BCText onClick={this.handleCourseClick}>{`<< ${titleCase(
              course.goal
            )}`}</BCText>
          </Group>
          <HeaderSection
            task={task}
            completed={completed}
            checkable={checkable}
            onToggle={this.handleCheckpointToggle}
          />
        </Group>
        <div section="breadcrumbs">HELLO</div>
        <HeaderSection
          section="header"
          task={task}
          completed={completed}
          checkable={checkable}
          onClick={this.handleCheckpointClick}
          onToggle={this.handleCheckpointToggle}
        />
        {resource && <ResourceSection section="resource" {...resource} />}
      </Card>
    );
  }
}
