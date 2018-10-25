import React, { Component } from "react";
import PropTypes from "prop-types";
import { map, prop } from "ramda";
import { Query } from "react-apollo";
import { queries } from "./graphql";
import { updateQuery } from "./actions";
import { Loading } from "../../components";
import { fakeCourses } from "../../fakeCourse";

export default class CoursesProvider extends Component {
  static propTypes = {
    children: PropTypes.func,
    curator: PropTypes.string,
    tag: PropTypes.string,
    searchTerm: PropTypes.string
  };

  render() {
    const { children, curator, tag, searchTerm } = this.props;
    return (
      <Query query={queries.courses} variables={{ searchTerm, curator, tag }}>
        {({ data, loading, fetchMore }) => {
          if (loading) {
            return <Loading />;
          }
          if (!data.courses) {
            return [];
          }
          const { edges, pageInfo } = data.courses;
          const courses = map(prop("node"), edges);
          const hasMore = pageInfo.hasNextPage;

          const loadMore = () => {
            fetchMore({
              query: queries.courses,
              variables: {
                curator,
                tag,
                searchTerm,
                after: pageInfo.endCursor
              },
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
