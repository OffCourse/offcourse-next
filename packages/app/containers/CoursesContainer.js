import React, { Component } from "react";
import { map, prop } from "ramda";
import Composer from "react-composer";
import { withRouter } from "next/router";
import { Query, Mutation } from "../components";
import { queries, mutations } from "../graphql";
import { Group } from "@offcourse/atoms";
import { CourseCardLayout } from "@offcourse/organisms";
import {
  updateQuery,
  goToCollection,
  goToCourse
} from "../tempUtils";

class CoursesContainer extends Component {
  render() {
    const { curator, tag } = this.props.router.query;
    return (

      <Composer
        components={[
          <Query query={queries.courses} variables={{ curator, tag }} />,
          <Query query={queries.courseCard} />,
          <Mutation mutation={mutations.changeCardSize} />
        ]}
      >
        {([{ data, fetchMore }, courseCardQuery, changeCardSize]) => {
          const { initialLevel, layout } = courseCardQuery.data.courseCard;
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
          return (
            <CourseCardLayout
              initialCardLevel={initialLevel}
              onResize={({ numberOfColumns }) => changeCardSize({ variables: { numberOfColumns } })}
              key={initialLevel}
              layout={layout}
              goToCollection={goToCollection}
              goToCourse={goToCourse}
              hasMore={hasMore}
              courses={courses}
              loadMore={loadMore}
            />
          );
        }}
      </Composer>
    );
  }
}

export default withRouter(CoursesContainer);
