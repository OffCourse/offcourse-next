import React, { Component } from "react";
import PropTypes from "prop-types";
import { HTMLViewer, VideoViewer } from "../../components";
import { Group, Text, Heading } from "@offcourse/atoms";
import system from "system-components";
import styled from "styled-components";
import { sizes } from "@offcourse/constants";
import { NotFound } from "..";

const { SMALL } = sizes;

const Viewers = {
  html: HTMLViewer,
  video: VideoViewer
};

const _BCText = system({
  is: "a",
  fontFamily: "base",
  m: 0,
  mt: 3,
  color: "black",
  lineHeight: 1,
  fontSize: 1
});

const BCText = styled(_BCText)`
  text-decoration: none;
  word-break: break-word;
  white-space: normal;
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

export default class ResourceSection extends Component {
  static propTypes = {};

  render() {
    const { resource } = this.props;
    const { title, content, resourceType, resourceUrl } = resource;
    const Viewer = Viewers[resourceType];
    return (
      <Group px={6}>
        <Heading size={SMALL}>{title}</Heading>
        <Group alignItems="flex-start">
          <BCText target="_blank" href={resourceUrl}>
            {content && `Source: ${resourceUrl}`}
          </BCText>
        </Group>
        <Group width="100%">
          <Viewer {...content} />
        </Group>
      </Group>
    );
  }
}
