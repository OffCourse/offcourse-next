import React, { Component } from "react";
import PropTypes from "prop-types";
import { find } from "ramda";
import { ResourceProvider, CourseProvider } from "../providers";
import { HTMLViewer } from "../components";
import { Heading, Group } from "@offcourse/atoms";

const removeNonAscii = str => {
  if (str === null || str === "") return false;
  else str = str.toString();

  return str.replace(/[^\x20-\x7E]/g, "");
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
                const { title, resourceType } = resource;
                const cleanTitle = resource ? removeNonAscii(title) : "";
                let viewer = null;
                switch (resourceType) {
                  case "html":
                    viewer = <HTMLViewer {...resource.content} />;
                }
                return (
                  <Group bg="white" px={["2em", "4em", "4em"]} py="2em">
                    <Heading>{cleanTitle}</Heading>
                    {viewer}
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
