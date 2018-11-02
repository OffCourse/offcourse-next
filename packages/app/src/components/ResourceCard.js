import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Card, Group, Text } from "@offcourse/atoms";
import { Header } from "@offcourse/molecules";
import { HTMLViewer, VideoViewer } from ".";

const Viewers = {
  html: HTMLViewer,
  video: VideoViewer
};

const ResourceCard = ({ resource }) => {
  const { resourceType, title, content } = resource;
  const Viewer = Viewers[resourceType];

  return (
    <Card border="none" bg="white" px={8}>
      <Group>
        <Header py={0}>{title}</Header>
        <Viewer {...content} />
      </Group>
    </Card>
  );
};

export default ResourceCard;
