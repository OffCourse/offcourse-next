import React, { Component } from "react";
import PropTypes from "prop-types";
import { HTMLViewer, VideoViewer } from "../../components";
import { Link, Group, Text, Heading } from "@offcourse/atoms";
import system from "system-components";

const Viewers = {
  html: HTMLViewer,
  video: VideoViewer
};

const BCText = system({
  is: "a",
  fontFamily: "base",
  m: 0,
  mb: 3,
  color: "black",
  lineHeight: 1,
  fontSize: 1
}).extend`
  text-decoration: none;
  word-break: break-word;
  white-space: normal;
  &:hover {
    color: ${props => props.theme.colors.primary}
  }
`;

export default class ResourceSection extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
  };

  render() {
    const {
      title,
      content,
      description,
      resourceType,
      resourceUrl
    } = this.props;
    const Viewer = Viewers[resourceType];
    return (
      <Group mr="3rem">
        <Heading size="small">{title}</Heading>
        <Group mt={4} alignItems="flex-start">
          <BCText
            target="_blank"
            href={resourceUrl}
          >{`Source: ${resourceUrl}`}</BCText>
        </Group>
        {content ? (
          <Group width="100%">
            <Viewer {...content} />
          </Group>
        ) : (
          <Group mt={4}>
            <Text>{description}</Text>
          </Group>
        )}
      </Group>
    );
  }
}
