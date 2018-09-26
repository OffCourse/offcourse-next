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
    resource: PropTypes.object
  };

  hasTags = tags => {
    return !isEmpty(tags) && !isNil(tags);
  };

  render() {
    const { resource } = this.props;
    if (!resource) return null;
    const { resourceType, content } = resource;
    const Viewer = Viewers[resourceType];
    return <Viewer {...content} />;
  }
}
