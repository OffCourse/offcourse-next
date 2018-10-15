import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { Icon, Checkbox, Heading, Group } from "@offcourse/atoms";
import { TagGroup } from "@offcourse/molecules";
import { sizes } from "@offcourse/constants";

const { LARGE, SMALL } = sizes;

export default class Meta extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const { task, tags, completed, checkable, onClick, onToggle } = this.props;
    return (
      <Group
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Group flexDirection="row" justifyContent="flex-start">
          <Icon size={LARGE} name="document" />
          <Group flexDirection="row" ml="1rem">
            <Heading size={SMALL}>Web Article</Heading>
          </Group>
        </Group>
        <TagGroup tags={tags} />
      </Group>
    );
  }
}
