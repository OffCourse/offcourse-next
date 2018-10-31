import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, Card, Group } from "@offcourse/atoms";
import { Header } from "@offcourse/molecules";
import { ErrorBoundary, HTMLViewer, VideoViewer } from ".";
import { ResourceProvider } from "../providers";

const Viewers = {
  html: HTMLViewer,
  video: VideoViewer
};

const ResourceCard = ({
  course,
  checkpoint,
  toggleCheckpoint,
  goToCheckpoint,
  goToCourse
}) => {
  const { goal, curator } = course;
  const { task, resourceUrl } = checkpoint;
  const handleCourseClick = () => {
    goToCourse({ goal, curator });
  };
  return (
    <Card bg="white" pt={6} px={[6, 6, 8]}>
      <Group section="header">
        <Group mb={6}>
          <Link
            onClick={handleCourseClick}
            fontFamily="base"
            basic
          >{`<< ${goal}`}</Link>
        </Group>
        <Header>{task}</Header>
      </Group>
      <ErrorBoundary>
        <ResourceProvider resourceUrl={resourceUrl}>
          {({ resource }) => {
            const { resourceType, content } = resource;
            const Viewer = Viewers[resourceType];
            return <Viewer {...content} />;
          }}
        </ResourceProvider>
      </ErrorBoundary>
    </Card>
  );
};

export default ResourceCard;
