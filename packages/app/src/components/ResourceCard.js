import React, { memo } from "react";
import PropTypes from "prop-types";
import { Card, Group } from "@offcourse/atoms";
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
        <Header py={[0, 6, 6]}>{title}</Header>
        <Viewer {...content} />
      </Group>
    </Card>
  );
};

ResourceCard.propTypes = {
  resource: PropTypes.shape({
    resourceType: PropTypes.string.isRequired,
    title: PropTypes.string,
    content: PropTypes.string
  })
};

export default memo(ResourceCard);
