import React from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import {
  Header,
  CheckpointMetaSection,
  ExpandableCard as Card
} from "@offcourse/molecules";
import { Text, Icon, Section } from "@offcourse/atoms";
import { affordances, sizes } from "@offcourse/constants";

const { UNCHECKABLE, NONE, CHECKABLE } = affordances;
const { LARGE } = sizes;

const cardAffordanceStates = (affordance, completed) => {
  if (affordance !== CHECKABLE) {
    return NONE;
  }
  return completed ? UNCHECKABLE : CHECKABLE;
};

const CheckpointCard = ({
  onCheckpointClick,
  onCheckpointToggle,
  onTagClick,
  checkpoint,
  breadcrumbs,
  mb,
  level,
  affordance,
  layout
}) => {
  const { tags, task, resourceUrl, resource, completed } = checkpoint;
  const cardAffordance = cardAffordanceStates(affordance, completed);
  return (
    <Card
      mb={mb}
      layout={layout}
      initialLevel={level}
      onIconClick={onCheckpointToggle}
      affordance={cardAffordance}
    >
      <Header
        bg={["grayScale.1", "white", "white"]}
        px={[breadcrumbs ? 8 : 6, 8, 8]}
        py={breadcrumbs ? 8 : 6}
        section="header"
        breadcrumbs={breadcrumbs}
        onClick={onCheckpointClick}
      >
        {task}
      </Header>
      <CheckpointMetaSection
        section="meta"
        px={[breadcrumbs ? 8 : 6, 8, 8]}
        {...resource}
        onTagClick={onTagClick}
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
};

CheckpointCard.propTypes = {
  checkpoint: PropTypes.object,
  onCheckpointClick: PropTypes.func,
  onCheckpointToggle: PropTypes.func,
  onTagClick: PropTypes.func,
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
  onCheckpointToggle: identity,
  layout: [["header"], ["header", "meta"], ["header", "meta", "source"]]
};

export default CheckpointCard;
