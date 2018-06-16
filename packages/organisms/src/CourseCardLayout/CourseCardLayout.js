import React, { Component } from "react";
import { times, map, identity } from "ramda";
import { Masonry, Loading } from "@offcourse/atoms";
import Sensor from "react-visibility-sensor";
import { CourseCard } from "..";
import CourseCardLayoutWrapper from "./CourseCardLayoutWrapper";
import PropTypes from "prop-types";

export default class CourseCardLayout extends Component {
  static propTypes = {
    hasMore: PropTypes.bool,
    loadMore: PropTypes.func,
    courses: PropTypes.arrayOf(
      PropTypes.shape({
        courseId: PropTypes.string.isRequired,
        goal: PropTypes.string.isRequired,
        curator: PropTypes.string.isRequired,
        avatarUrl: PropTypes.string,
        courseUrl: PropTypes.string
      })
    )
  };

  static defaultProps = {
    hasMore: false,
    loadMore: () => {}
  };

  calculateBreakpoints() {
    return times(identity, 100).map(columns => {
      const gutter = 16;
      const columnWidth = 288;
      const offset = columnWidth + gutter;
      const colSpace = (columns + 1) * columnWidth;
      const gutterSpace = columns * gutter;
      return colSpace + offset + gutterSpace;
    });
  }

  render() {
    const { courses, hasMore, loadMore } = this.props;
    return (
      <CourseCardLayoutWrapper>
        <Masonry breakpoints={this.calculateBreakpoints()}>
          {courses.map(course => (
            <CourseCard key={course.courseId} course={course} />
          ))}
        </Masonry>
        <Sensor onChange={isVisible => isVisible && loadMore()}>
          {() => <div>{hasMore && <Loading size="large" />}</div>}
        </Sensor>
      </CourseCardLayoutWrapper>
    );
  }
}
