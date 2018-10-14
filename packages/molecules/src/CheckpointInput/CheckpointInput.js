import React, { Component } from "react";
import PropTypes from "prop-types";
import CheckpointInputWrapper from "./CheckpointInputWrapper";
import { Group, Input, Icon } from "@offcourse/atoms";
import { IconGroup } from "..";

export default class CheckpointInput extends Component {
  static propTypes = {};

  handleBlur = e => {
    const { onBlur } = this.props;
    return onBlur(e.target.name);
  };

  render() {
    const {
      name,
      children,
      value,
      remove,
      hasErrors,
      onChange,
      onBlur
    } = this.props;
    return (
      <CheckpointInputWrapper border={hasErrors ? 2 : 0}>
        <Group alignItems="stretch" className="inputs">
          <Input
            onChange={onChange}
            onBlur={this.handleBlur}
            pb={2}
            mb={0}
            name={`${name}.task`}
            value={value.task}
            placeholder="Task"
          />
          <Input
            onChange={onChange}
            onBlur={this.handleBlur}
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
  }
}
