import React, { Component } from "react";
import { withRouter } from "next/router";
import CoursesQuery from "../components/CoursesQuery";
import { CourseCardLayout } from "@offcourse/organisms";
import Router from "next/router";

class CoursesContainer extends Component {
  goToCollection = query => {
    const { router } = this.props;
    router.push({
      pathname: "/",
      query
    });
  };

  goToCourse = query => {
    const { router } = this.props;
    router.push({
      pathname: "/course",
      query
    });
  };

  render() {
    const { curator, tag } = this.props.router.query;
    return (
      <CoursesQuery variables={{ curator, tag }}>
        {({ loading, error, hasMore, loadMore, courses }) => {
          if (loading) return null;
          if (error) return null;

          return (
            <CourseCardLayout
              goToCollection={this.goToCollection}
              goToCourse={this.goToCourse}
              hasMore={hasMore}
              courses={courses}
              loadMore={loadMore}
            />
          );
        }}
      </CoursesQuery>
    );
  }
}

export default withRouter(CoursesContainer);
