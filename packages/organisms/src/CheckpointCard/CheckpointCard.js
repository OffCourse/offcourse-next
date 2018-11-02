import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { Header, ExpandableCard as Card } from "@offcourse/molecules";
import { Link, Group, Checkbox, Text } from "@offcourse/atoms";
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
    layout: [["header"], ["header", "meta"], ["breadcrumbs", "meta", "source"]]
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
      mx,
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
        mx={mx}
        mb={mb}
      >
        <Group
          bg={["grayScale.1", "white", "white"]}
          py={[7]}
          pb={0}
          section="breadcrumbs"
          alignItems="stretch"
        >
          <Group
            pb={[3, 0, 0]}
            pt={0}
            px={8}
            display={["flex", "none", "none"]}
          >
            <Link
              onClick={this.handleCourseClick}
              fontFamily="base"
              basic
            >{`<< ${course.goal}`}</Link>
          </Group>
          <Header
            p={0}
            px={[8, 8, 8]}
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
        <Group section="meta">
          <Meta
            section="meta"
            resourceType={resource ? resource.resourceType : "unknown"}
            tags={tags || []}
          />
        </Group>
        <Group section="source">
          <Group pt={6} px={8}>
            <Text size={LARGE}>
              View the content below or on the original source
            </Text>
          </Group>
        </Group>
      </Card>
    );
  }
}
