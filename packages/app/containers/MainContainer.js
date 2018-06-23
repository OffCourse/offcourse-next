import React, { Component } from "react";
import CoursesQuery from "../components/CoursesQuery";
import { CourseCardLayout } from "@offcourse/organisms";
import Router from "next/router";

export default class MainContainer extends Component {

  goToCollection = query => {
    Router.push({
      pathname: "/",
      query
    });
  };

  render() {
    const { curator, tag } = this.props.query;
    return (
      <CoursesQuery variables={{ curator, tag }}>
        {({ loading, error, hasMore, loadMore, courses }) => {
          if (loading) return null;
          if (error) return null;

          return (
            <CourseCardLayout
              goToCollection={this.goToCollection}
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
