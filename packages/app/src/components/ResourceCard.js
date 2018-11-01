import React, { Component, Fragment } from "react";
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
    <Card border="none" bg="white" pt={6} px={[6, 6, 8]}>
      <Header>{title}</Header>
      <Viewer {...content} />
    </Card>
  );
};

export default ResourceCard;

{
  /* <Group section="header" alignItems="stretch">
        <Group mb={6}>
          <Link
            onClick={handleCourseClick}
            fontFamily="base"
            basic
          >{`<< ${goal}`}</Link>
        </Group>
        <Header
          icon={
            checkable && (
              <Checkbox
                size={LARGE}
                bg={["white", "grayScale.1", "grayScale.1"]}
                checked={completed}
                onToggle={handleCheckpointToggle}
              />
            )
          }
        >
          {task}
        </Header>
      </Group> */
}
