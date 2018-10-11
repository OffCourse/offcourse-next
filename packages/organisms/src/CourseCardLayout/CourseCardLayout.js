import React, { Component } from "react";
import { times, map, identity } from "ramda";
import { Masonry, Loading } from "@offcourse/atoms";
import { CourseCard } from "..";
import CourseCardLayoutWrapper from "./CourseCardLayoutWrapper";
import PropTypes from "prop-types";
import Waypoint from "react-waypoint";
import { sizes } from "@offcourse/constants";

const { LARGE } = sizes;

export default class CourseCardLayout extends Component {
  static propTypes = {
    initialCardLevel: PropTypes.number,
    goToCollection: PropTypes.func,
    goToCourse: PropTypes.func,
    goToCheckpoint: PropTypes.func,
    hasMore: PropTypes.bool,
    loadMore: PropTypes.func,
    layout: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    courses: PropTypes.arrayOf(
      PropTypes.shape({
        courseId: PropTypes.string.isRequired,
        goal: PropTypes.string.isRequired,
        curator: PropTypes.string.isRequired,
        avatarUrl: PropTypes.string,
        courseUrl: PropTypes.string
      })
    ),
    onResize: PropTypes.func
  };

  static defaultProps = {
    hasMore: false,
    onResize: identity,
    goToCollection: identity,
    goToCourse: identity,
    loadMore: identity
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

  breakpoints = this.calculateBreakpoints();

  handlePositionChange = ({ currentPosition }) => {
    const { loadMore } = this.props;
    if (currentPosition !== "outside") {
      loadMore();
    }
  };

  containerRef = React.createRef();

  render() {
    const {
      courses,
      layout,
      goToCollection,
      goToCourse,
      goToCheckpoint,
      initialCardLevel,
      onResize,
      hasMore
    } = this.props;
    return (
      <CourseCardLayoutWrapper>
        <Masonry onResize={onResize} breakpoints={this.breakpoints}>
          {map(
            course => (
              <CourseCard
                initialLevel={initialCardLevel}
                onCuratorClick={goToCollection}
                expandable={true}
                onGoalClick={goToCourse}
                onCheckpointClick={goToCheckpoint}
                onTagClick={goToCollection}
                key={course.courseId}
                layout={layout}
                course={course}
              />
            ),
            courses
          )}
        </Masonry>
        <Waypoint onPositionChange={this.handlePositionChange}>
          <div>{hasMore && <Loading size={LARGE} />}</div>
        </Waypoint>
      </CourseCardLayoutWrapper>
    );
  }
}
