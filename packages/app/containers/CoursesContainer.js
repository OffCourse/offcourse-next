import React, { Component } from "react";
import { withRouter } from "next/router";
import { Query } from "../components";
import { queries } from "../graphql";
import { CourseCardLayout } from "@offcourse/organisms";
import {
  prepEdges,
  updateQuery,
  goToCollection,
  goToCourse
} from "../tempUtils";

class CoursesContainer extends Component {
  render() {
    const { curator, tag } = this.props.router.query;
    const variables = { curator, tag };
    return (
      <Query query={queries.courses} variables={variables}>
        {({ data, fetchMore }) => {
          const { edges, pageInfo } = data.courses;
          const courses = prepEdges(edges);
          const hasMore = pageInfo.hasNextPage;
          const loadMore = () => {
            fetchMore({
              query: queries.courses,
              variables: { ...variables, after: pageInfo.endCursor },
              updateQuery
            });
          };
          return (
            <CourseCardLayout
              goToCollection={goToCollection}
              goToCourse={goToCourse}
              hasMore={hasMore}
              courses={courses}
              loadMore={loadMore}
            />
          );
        }}
      </Query>
    );
  }
}

export default withRouter(CoursesContainer);
