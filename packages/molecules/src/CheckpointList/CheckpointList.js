import React, { memo } from "react";
import PropTypes from "prop-types";
import { map } from "ramda";
import { Section } from "@offcourse/atoms";
import { List, CheckpointItem } from "..";

const CheckpointList = ({ checkpoints, onClick, onToggle }) => {
  const createItem = cp => (
    <CheckpointItem
      onToggle={onToggle}
      onClick={onClick}
      key={`${cp.checkpointId}-${cp.completed}`}
      {...cp}
    />
  );
  return <List>{map(createItem, checkpoints)}</List>;
};

CheckpointList.propTypes = {
  onToggle: PropTypes.func,
  onClick: PropTypes.func,
  checkpoints: PropTypes.array
};

CheckpointList.defaultProps = {
  checkpoints: []
};

export default memo(CheckpointList);
