import React, { memo } from "react";
import PropTypes from "prop-types";
import { Section, Card } from "@offcourse/atoms";
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
    <Card>
      <Section flexDirection="column" alignItems="flex-start" px={8}>
        <Header px={0} py={[0, 6, 6]}>
          {title}
        </Header>
        <Viewer {...content} />
      </Section>
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
