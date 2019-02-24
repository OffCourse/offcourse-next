import React from "react";
import { Adopt } from "react-adopt";
import { none } from "ramda";
import View from "./View";
import { CourseProvider } from "../../providers";
import { ContentContainer } from "../../containers";

const mapper = {
  courseLeft: ({ render }) => (
    <CourseProvider
      courseQuery={{
        curator: "jameshands",
        goal: "get acquainted with sensors"
      }}
    >
      {render}
    </CourseProvider>
  ),
  courseCenter: ({ render }) => (
    <CourseProvider
      courseQuery={{ curator: "offcourse", goal: "get started with offcourse" }}
    >
      {render}
    </CourseProvider>
  ),
  courseRight: ({ render }) => (
    <CourseProvider
      courseQuery={{
        curator: "luke",
        goal: "discover digital fabrication"
      }}
    >
      {render}
    </CourseProvider>
  ),
  content: <ContentContainer term="about" />
};
/* eslint: disable */
/* eslint: enable */

const mapProps = ({ content, courseLeft, courseCenter, courseRight }) => {
  const isLoading = course => course.loading;
  const _courses = [courseLeft.course, courseCenter.course, courseRight.course];
  const courses = none(isLoading, _courses) ? _courses : [];
  return {
    content,
    courses
  };
};

const Container = ({ handlers }) => {
  return (
    <Adopt mapper={mapper} mapProps={mapProps}>
      {props => <View handlers={handlers} {...props} />}
    </Adopt>
  );
};

export default Container;
