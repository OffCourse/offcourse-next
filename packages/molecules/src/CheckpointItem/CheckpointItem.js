import React, { memo } from "react";
import PropTypes from "prop-types";
import { Item } from "@offcourse/atoms";
import { CheckItem } from "..";

const CheckpointItem = ({
  onToggle,
  checkpointId,
  onClick,
  completed,
  task,
  is,
  resourceUrl
}) => {
  const handleClick = () => onClick({ checkpointId, task });
  const handleToggle = ({ checked }) =>
    onToggle({ checkpointId, task, checked });
  return onToggle ? (
    <CheckItem
      is={is}
      id={checkpointId}
      onClick={handleClick}
      href={!onClick ? resourceUrl : null}
      checked={completed}
      onToggle={handleToggle}
    >
      {task}
    </CheckItem>
  ) : (
    <Item is={is} onClick={handleClick} href={!onClick ? resourceUrl : null}>
      {task}
    </Item>
  );
};

CheckpointItem.propTypes = {
  onToggle: PropTypes.func,
  onClick: PropTypes.func,
  checkpointId: PropTypes.string,
  resourceUrl: PropTypes.string,
  completed: PropTypes.bool,
  task: PropTypes.string.isRequired,
  is: PropTypes.string
};

export default memo(CheckpointItem);
