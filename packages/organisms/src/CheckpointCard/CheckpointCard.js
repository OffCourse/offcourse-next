import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { Header, ExpandableCard as Card } from "@offcourse/molecules";
import { Link, Group, Checkbox } from "@offcourse/atoms";
import { Meta } from "./sections";
import { sizes } from "@offcourse/constants";

const { LARGE } = sizes;
export default class CheckpointCard extends Component {
  static propTypes = {
    checkpoint: PropTypes.object,
    onCheckpointClick: PropTypes.func,
    onCourseClick: PropTypes.func,
    onCheckpointToggle: PropTypes.func,
    checkable: PropTypes.bool,
    layout: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    level: PropTypes.number,
    status: PropTypes.string
  };

  static defaultProps = {
    level: 1,
    onCheckpointClick: identity,
    onCheckpointToggle: identity,
    layout: [["header"], ["header", "meta"], ["breadcrumbs", "meta"]]
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
    const {
      borderBottom,
      status,
      checkable,
      checkpoint,
      level,
      mb,
      layout
    } = this.props;
    const {
      course,
      tags,
      task,
      resource,
      completed,
      checkpointId
    } = checkpoint;

    return (
      <Card
        key={`${checkpointId}-${completed}`}
        layout={layout}
        initialLevel={level}
        expandable={false}
        borderBottom={borderBottom}
        inactive={level === 0 || status === "loading"}
        px={0}
        pt={0}
        mb={mb}
      >
        <Group
          bg={["grayScale.1", "white", "white"]}
          py={6}
          pb={0}
          section="breadcrumbs"
          alignItems="stretch"
        >
          <Header
            p={0}
            px={[6, 8, 8]}
            py={0}
            bg={["grayScale.1", "white", "white"]}
            onClick={this.handleCheckpointClick}
            icon={
              checkable && (
                <Checkbox
                  size={LARGE}
                  bg={["white", "grayScale.1", "grayScale.1"]}
                  checked={completed}
                  onToggle={this.handleCheckpointToggle}
                />
              )
            }
          >
            {task}
          </Header>
          <Group
            pt={[3, 0, 0]}
            pb={0}
            px={6}
            display={["flex", "none", "none"]}
          >
            <Link
              onClick={this.handleCourseClick}
              fontFamily="base"
              basic
            >{`<< ${course.goal}`}</Link>
          </Group>
        </Group>
        <Group
          alignItems="stretch"
          py={6}
          pb={0}
          bg={["grayScale.1", "white", "white"]}
          section="header"
        >
          <Header
            px={[6, 8, 8]}
            onClick={this.handleCheckpointClick}
            icon={
              checkable && (
                <Checkbox
                  size={LARGE}
                  bg={["white", "grayScale.1", "grayScale.1"]}
                  checked={completed}
                  onToggle={this.handleCheckpointToggle}
                />
              )
            }
          >
            {task}
          </Header>
        </Group>
        <Meta
          section="meta"
          resourceType={resource ? resource.resourceType : "unknown"}
          tags={tags || []}
        />
      </Card>
    );
  }
}
