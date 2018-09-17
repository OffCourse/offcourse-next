import React, { Component } from "react";
import PropTypes from "prop-types";
import { Heading, Group, Text } from "@offcourse/atoms";
import { isEmpty, isNil } from "ramda";
import { HTMLViewer, VideoViewer } from "../components";
import { TagGroup } from "@offcourse/molecules";

const Viewers = {
  html: HTMLViewer,
  video: VideoViewer
};

export default class ResourceItem extends Component {
  static propTypes = {
    resource: PropTypes.object,
    handlers: PropTypes.object
  };
  hasTags = tags => {
    return !isEmpty(tags) && !isNil(tags);
  };

  render() {
    const { resource, handlers } = this.props;
    if (!resource) return null;
    const { title, description, resourceType, content, tags } = resource;
    const { goToCollection } = handlers;
    const Viewer = Viewers[resourceType];
    return (
      <Group mb="1em">
        <Heading size="large">{title}</Heading>
        {description && <Text>{description}</Text>}
        {this.hasTags(tags) && (
          <TagGroup
            onClick={goToCollection}
            flex={1}
            direction="both"
            section="tags"
            tags={tags}
          />
        )}
        <Viewer {...content} />
      </Group>
    );
  }
}
