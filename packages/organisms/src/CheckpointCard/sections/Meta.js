import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon, Section, Group } from "@offcourse/atoms";
import { TagGroup } from "@offcourse/molecules";
import { sizes } from "@offcourse/constants";

const { LARGE } = sizes;
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

  static defaultProps = {
    resourceType: "unknown",
    tags: []
  };

  render() {
    const { tags, resourceType } = this.props;
    const { iconName, text } = resource[resourceType];
    return (
      <Section
        flexDirection="row"
        alignItems="center"
        p={6}
        px={[6, 8, 8]}
        pb={0}
        justifyContent={["flex-start", "space-between", "space-between"]}
      >
        <Icon size={LARGE} name={iconName} />
        <Group ml={7} flexDirection="row" alignItems="center">
          <TagGroup tags={tags} />
        </Group>
      </Section>
    );
  }
}
