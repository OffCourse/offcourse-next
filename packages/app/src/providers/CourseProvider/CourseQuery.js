import React, { Component } from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import { queries } from "./graphql";
import { fakeCourse } from "../../fakeCourse";

export default class CourseQuery extends Component {
  static propTypes = {
    children: PropTypes.func,
    userName: PropTypes.string,
    courseId: PropTypes.string,
    task: PropTypes.string,
    courseQuery: PropTypes.shape({
      goal: PropTypes.string,
      curator: PropTypes.string
    })
  };
  render() {
    const { children, task, courseId, userName, courseQuery } = this.props;
    if (courseId || courseQuery) {
      const variables = courseId ? { courseId } : { courseQuery };
      return (
        <Query
          query={queries.course}
          variables={{
            ...variables,
            task: task,
            needsContent: !!task,
            isAuthenticated: !!userName
          }}
        >
          {({ loading, error, data }) => {
            if (loading) {
              return children(fakeCourse());
            }
            if (error) {
              return children(fakeCourse("error"));
            }
            // return children({ ...fakeCourse(), status: "loading" });
            return children(data.course);
          }}
        </Query>
      );
    }
    return children({});
  }
}
