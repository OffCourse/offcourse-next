import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import {
  Header,
  CheckpointMetaSection,
  ExpandableCard as Card
} from "@offcourse/molecules";
import { Text, Icon, Section } from "@offcourse/atoms";
import { affordances, sizes } from "@offcourse/constants";

const { NONE, CHECKABLE } = affordances;

const { LARGE } = sizes;
class CheckpointCard extends Component {
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
    const { breadcrumbs, mb, checkpoint, level, layout } = this.props;
    const { tags, task, resourceUrl, resource, completed } = checkpoint;

    return (
      <Card
        mb={mb}
        layout={layout}
        initialLevel={level}
        onIconClick={this.handleCheckpointToggle}
        affordance={completed ? CHECKABLE : NONE}
      >
        <Header
          bg={["grayScale.1", "white", "white"]}
          px={[breadcrumbs ? 8 : 6, 8, 8]}
          py={breadcrumbs ? 8 : 6}
          section="header"
          breadcrumbs={breadcrumbs}
          onClick={this.handleCheckpointClick}
        >
          {task}
        </Header>
        <CheckpointMetaSection
          section="meta"
          px={[breadcrumbs ? 8 : 6, 8, 8]}
          resourceType={resource && resource.resourceType}
          tags={tags}
        />
        <Section px={8} section="source">
          <Text size={LARGE}>
            View the content below or on the original source
            <Icon mx={4} name="link" onClick={() => window.open(resourceUrl)} />
          </Text>
        </Section>
      </Card>
    );
  }
}

CheckpointCard.propTypes = {
  checkpoint: PropTypes.object,
  onCheckpointClick: PropTypes.func,
  onCourseClick: PropTypes.func,
  onCheckpointToggle: PropTypes.func,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, onClick: PropTypes.func })
  ),
  mb: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number
  ]),
  layout: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  level: PropTypes.number
};

CheckpointCard.defaultProps = {
  level: 1,
  onCheckpointClick: identity,
  onCheckpointToggle: identity,
  layout: [["header"], ["header", "meta"], ["header", "meta", "source"]]
};

export default CheckpointCard;
