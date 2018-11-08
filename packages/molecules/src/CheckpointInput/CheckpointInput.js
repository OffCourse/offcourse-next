import React, { memo } from "react";
import PropTypes from "prop-types";
import CheckpointInputWrapper from "./CheckpointInputWrapper";
import { Group, Input } from "@offcourse/atoms";

const CheckpointInput = ({
  name,
  children,
  value,
  hasErrors,
  onChange,
  onBlur
}) => {
  return (
    <CheckpointInputWrapper border={hasErrors ? 2 : 0}>
      <Group alignItems="stretch" className="inputs">
        <Input
          onChange={onChange}
          onBlur={onBlur}
          pb={2}
          mb={0}
          name={`${name}.task`}
          value={value.task}
          placeholder="Task"
        />
        <Input
          onChange={onChange}
          onBlur={onBlur}
          unformatted
          pt={0}
          mt={0}
          name={`${name}.resourceUrl`}
          variant="small"
          value={value.resourceUrl}
          placeholder="Resource URL"
        />
      </Group>
      {children && (
        <Group px={6} alignItems="flex-end">
          {children}
        </Group>
      )}
    </CheckpointInputWrapper>
  );
};

CheckpointInput.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  hasErrors: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.shape({
    task: PropTypes.string,
    resourceUrl: PropTypes.string
  })
};

export default memo(CheckpointInput);
