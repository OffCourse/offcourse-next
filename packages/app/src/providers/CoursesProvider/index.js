import React, { Component } from "react";
import PropTypes from "prop-types";
import { map, prop } from "ramda";
import { Query } from "react-apollo";
import { queries } from "./graphql";
import { updateQuery } from "./actions";
import { LoadingLayout } from "../../layouts";

export default class CoursesProvider extends Component {
  static propTypes = {
    children: PropTypes.func,
    curator: PropTypes.string,
    tag: PropTypes.string,
    first: PropTypes.number,
    searchTerm: PropTypes.string,
    collectionName: PropTypes.string
  };

  render() {
    const {
      collectionName,
      children,
      curator,
      tag,
      first,
      searchTerm
    } = this.props;
    return (
      <Query
        query={queries.courses}
        variables={{ collectionName, searchTerm, first, curator, tag }}
      >
        {({ data, loading, fetchMore }) => {
          if (loading) {
            return <LoadingLayout />;
          }

          if (!data.courses) {
            return <LoadingLayout />;
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
