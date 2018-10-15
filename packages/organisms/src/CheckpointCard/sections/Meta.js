import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { Icon, Checkbox, Heading, Group } from "@offcourse/atoms";
import { TagGroup } from "@offcourse/molecules";
import { sizes } from "@offcourse/constants";

const { LARGE, SMALL } = sizes;
const resource = {
  video: {
    iconName: "video",
    text: "Video"
  },
  html: {
    iconName: "document",
    text: "Web Article"
  },
  unknown: {
    iconName: "question",
    text: "Unknown"
  }
};

export default class Meta extends Component {
  static propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {};

  render() {
    const { tags, resourceType } = this.props;
    const { iconName, text } = resource[resourceType];
    return (
      <Group
        flexDirection="row"
        alignItems="center"
        justifyContent={["flex-start", "space-between", "space-between"]}
      >
        <Icon size={LARGE} name={iconName} />
        <Group ml={6} flexDirection="row" alignItems="center">
          <TagGroup tags={tags} />
        </Group>
      </Group>
    );
  }
}
