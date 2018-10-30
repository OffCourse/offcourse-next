import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { Checkbox, Group, Icon, Link } from "@offcourse/atoms";
import { Header, ExpandableCard as Card } from "@offcourse/molecules";
import titleCase from "voca/title_case";
import system from "system-components";
import styled from "styled-components";

import Loadable from "react-loadable";

import { sizes } from "@offcourse/constants";

const { LARGE } = sizes;

const ResourceSection = Loadable({
  loader: () => import("./ResourceSection"),
  loading: () => <div>HELLO</div>
});

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
        pt={6}
        px={[6, 6, 8]}
        inactive={level === 0 || status === "loading"}
        mb={6}
      >
        <Group alignItems="stretch" section="breadcrumbs-header">
          <Header
            completed={completed}
            checkable={checkable}
            icon={
              checkable && (
                <Checkbox
                  size={LARGE}
                  bg="grayScale.1"
                  checked={completed}
                  onToggle={this.handleCheckpointToggle}
                />
              )
            }
          >
            {task}
          </Header>
          <Group
            mt={6}
            display={["flex", "none", "none"]}
            alignItems="flex-start"
          >
            <Link onClick={this.handleCourseClick}>
              {`<< ${titleCase(course.goal)}`}
            </Link>
          </Group>
        </Group>
        <Header
          section="header"
          completed={completed}
          checkable={checkable}
          onClick={this.handleCheckpointClick}
          onToggle={this.handleCheckpointToggle}
        >
          {task}
        </Header>
        {resource && <ResourceSection section="resource" {...resource} />}
      </Card>
    );
  }
}
