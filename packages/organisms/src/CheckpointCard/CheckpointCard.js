import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import {
  Header,
  CheckpointMetaSection,
  ExpandableCard as Card
} from "@offcourse/molecules";
import { Text, Checkbox, Icon, Section } from "@offcourse/atoms";
import { affordances, sizes } from "@offcourse/constants";

const { CHECKABLE, NONE } = affordances;

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
    const { breadcrumbs, checkpoint, level, layout } = this.props;
    const {
      tags,
      task,
      resourceUrl,
      resource,
      completed,
      checkpointId
    } = checkpoint;

    return (
      <Card
        key={`${checkpointId}-${completed}`}
        layout={layout}
        initialLevel={level}
        affordance={CHECKABLE}
      >
        <Header
          bg={["grayScale.1", "white", "white"]}
          section="header"
          breadcrumbs={breadcrumbs}
          onClick={this.handleCheckpointClick}
        >
          {task}
        </Header>
        <CheckpointMetaSection
          section="meta"
          resourceType={resource && resource.resourceType}
          tags={tags}
        />
        <Section section="source">
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
  checkable: PropTypes.bool,
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
