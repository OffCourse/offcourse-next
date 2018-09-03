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
    courseQuery: PropTypes.shape({
      goal: PropTypes.string,
      curator: PropTypes.string
    })
  };
  render() {
    const { children, courseId, userName, courseQuery } = this.props;
    const query = userName ? queries.courseWithStatus : queries.course;
    if (courseId || courseQuery) {
      const variables = courseId ? { courseId } : { courseQuery };
      return (
        <Query query={query} variables={variables}>
          {({ loading, error, data }) => {
            if (loading) {
              return children(fakeCourse());
            }
            if (error) {
              return children(fakeCourse("error"));
            }
            return children(data.course);
          }}
        </Query>
      );
    }
    return children({});
  }
}
