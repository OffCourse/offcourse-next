import React, { Component } from "react";
import PropTypes from "prop-types";
import { isEmpty, isNil } from "ramda";
import { HTMLViewer, VideoViewer } from "../components";

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
