import React, { Component } from "react";
import { times, map, identity } from "ramda";
import { Masonry } from "@offcourse/atoms";
import { CourseCard } from "@offcourse/organisms";
import PropTypes from "prop-types";

export default class CardLayout extends Component {
  render() {
    const gutter = 16;
    const sizes = times(identity, 100).map(columns => {
      const offset = 304;
      const colSpace = (columns + 1) * 288;
      const gutterSpace = columns * 16;
      const mq = colSpace + offset + gutterSpace;
      return {
        columns,
        mq,
        gutter
      };
    });

    const { items, loadMore } = this.props;
    const breakpoints = map(({ mq }) => mq, sizes);
    return (
      <div
        style={{
          padding: "1rem",
          width: "100%",
          flexDirection: "column",
          overflow: "auto",
          display: "flex",
          boxSizing: "border-box"
        }}
      >
        <Masonry breakpoints={breakpoints}>
          {items.map(course => (
            <CourseCard key={course.courseId} course={course} />
          ))}
        </Masonry>
        <button onClick={loadMore}>loadMore</button>
      </div>
    );
  }
}
