import React, { Component } from "react";
import PropTypes from "prop-types";
import { map, prop } from "ramda";
import { Query } from "react-apollo";
import { queries } from "./graphql";
import { updateQuery } from "./actions";
import { fakeCourses } from "../../fakeCourse";

export default class CoursesProvider extends Component {
  static propTypes = {
    children: PropTypes.func,
    curator: PropTypes.string,
    tag: PropTypes.string
  };

  render() {
    const { children, curator, tag } = this.props;
    return (
      <Query query={queries.courses} variables={{ curator, tag }}>
        {({ data, loading, fetchMore }) => {
          if (loading) {
            return children({ courses: fakeCourses(7, 15) });
          }
          const { edges, pageInfo } = data.courses;
          const courses = map(prop("node"), edges);
          const hasMore = pageInfo.hasNextPage;

          const loadMore = () => {
            fetchMore({
              query: queries.courses,
              variables: { curator, tag, after: pageInfo.endCursor },
              updateQuery
            });
          };

          const value = {
            courses,
            hasMore,
            loadMore
          };
          return children(value);
        }}
      </Query>
    );
  }
}
