import React, { Component } from "react";
import { none } from "ramda";
import { Adopt } from "react-adopt";
import View from "./View";
import { CourseProvider } from "../../providers";
import { ContentContainer } from "../../containers";

/* eslint: disable */
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
  content: <ContentContainer term="introduction" />
};
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

export default class Container extends Component {
  componentDidMount() {
    document.cookie = `firstVisit=${Date.now()}`;
  }
  render() {
    const { handlers } = this.props;
    return (
      <Adopt mapper={mapper} mapProps={mapProps}>
        {props => <View handlers={handlers} {...props} />}
      </Adopt>
    );
  }
}
