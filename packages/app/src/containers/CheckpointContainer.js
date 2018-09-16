import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { find } from "ramda";
import { ResourceProvider, CourseProvider } from "../providers";
import { HTMLViewer, VideoViewer } from "../components";
import { Heading, Group, Text } from "@offcourse/atoms";

const removeNonAscii = str => {
  if (str === null || str === "") return false;
  else str = str.toString();

  return str.replace(/[^\x20-\x7E]/g, "");
};

const Viewers = {
  html: HTMLViewer,
  video: VideoViewer
};

export default class Viewer extends Component {
  static propTypes = {
    match: PropTypes.object
  };
  render() {
    const { match } = this.props;
    const { courseId, curator, goal, task } = match.params;
    const courseQuery = { curator, goal };
    return (
      <CourseProvider courseId={courseId} courseQuery={courseQuery}>
        {({ course }) => {
          if (course.goal === "loading") {
            return null;
          }
          const { resourceUrl } = find(
            ({ task: cpTask }) => task === cpTask,
            course.checkpoints
          );
          return (
            <ResourceProvider resourceUrl={resourceUrl}>
              {({ resource }) => {
                if (!resource) return null;
                const { title, description, resourceType, content } = resource;
                const cleanTitle = resource ? removeNonAscii(title) : "";
                const Viewer = Viewers[resourceType];
                return (
                  <Group bg="white" px={["2em", "4em", "4em"]} py="2em">
                    <Group mb="1em">
                      <Heading>{task}</Heading>
                    </Group>
                    <Heading size="large">{cleanTitle}</Heading>
                    {description && <Text>{description}</Text>}
                    <Viewer {...content} />
                  </Group>
                );
              }}
            </ResourceProvider>
          );
        }}
      </CourseProvider>
    );
  }
}
