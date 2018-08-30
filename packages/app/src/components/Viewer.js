import React, { Component } from "react";
import PropTypes from "prop-types";
import { find } from "ramda";
import { ResourceProvider, CourseProvider } from "../providers";
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
          const { resourceUrl } = find(
            ({ task: cpTask }) => task === cpTask,
            course.checkpoints
          );
          return (
            <ResourceProvider resourceUrl={resourceUrl}>
              {({ resource }) => {
                return resource ? (
                  <div>
                    <h1>{resource.title}</h1>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: resource.content.html
                      }}
                    />
                  </div>
                ) : null;
              }}
            </ResourceProvider>
          );
        }}
      </CourseProvider>
    );
  }
}
