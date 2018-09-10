import React, { Component } from "react";
import PropTypes from "prop-types";
import { find } from "ramda";
import { ResourceProvider, CourseProvider } from "../providers";
import { Heading, Group, Link } from "@offcourse/atoms";
import Markdown from "markdown-to-jsx";
import system from "system-components";

const Image = system({
  is: "img",
  maxWidth: "100%",
  maxHeight: "100%"
});

function remove_non_ascii(str) {
  if (str === null || str === "") return false;
  else str = str.toString();

  return str.replace(/[^\x20-\x7E]/g, "");
}

const Text = system({ is: "p", lineHeight: 3, fontSize: 2, py: "0.25rem" });

export default class componentName extends Component {
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
                const title = resource ? remove_non_ascii(resource.title) : "";
                return resource
                  ? resource.resourceType === "html" && (
                      <div style={{ width: "100%" }}>
                        <Heading>{title || null}</Heading>
                        <Markdown
                          style={{ width: "100%" }}
                          options={{
                            overrides: {
                              h1: {
                                props: { size: "small", component: Heading }
                              },
                              p: { component: Text },
                              a: { component: Link },
                              img: { component: Image }
                            }
                          }}
                        >
                          {resource.content.markdown}
                        </Markdown>
                      </div>
                    )
                  : null;
              }}
            </ResourceProvider>
          );
        }}
      </CourseProvider>
    );
  }
}
