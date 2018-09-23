import React, { Component } from "react";
import PropTypes from "prop-types";
import { HTMLViewer, VideoViewer } from "../../components";
import { Group, Text } from "@offcourse/atoms";

const Viewers = {
  html: HTMLViewer,
  video: VideoViewer
};

export default class ResourceSection extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
  };

  render() {
    const { title, content, description, resourceType } = this.props;
    const Viewer = Viewers[resourceType];
    return (
      <Group mr="3rem">
        <Text>{title}</Text>
        {content ? (
          <Group width="100%" mt={6}>
            <Viewer {...content} />
          </Group>
        ) : (
          <Group mt={6}>
            <Text>{description}</Text>
          </Group>
        )}
      </Group>
    );
  }
}
