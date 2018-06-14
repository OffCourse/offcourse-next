import React, { Component } from "react";
import { times, identity } from "ramda";
import { Masonry } from "@offcourse/atoms";
import { CourseCard } from "@offcourse/organisms";
import PropTypes from "prop-types";

export default class CardLayout extends Component {
  render() {
    const gutter = 16;
    const sizes = times(identity, 100).map(columns => {
      const mq = `${columns * 288 + (columns - 1) * 16}px`;
      return {
        columns,
        mq,
        gutter
      };
    });

    const { items, loadMore } = this.props;
    return (
      <div
        style={{
          paddingTop: "1rem",
          paddingBottom: "1rem",
          display: "flex",
          alignSelf: "center"
        }}
      >
        <Masonry loadMore={loadMore} sizes={sizes}>
          {({ forcePack }) =>
            items.map((course, index) => (
              <CourseCard key={course.courseId} course={course} />
            ))
          }
        </Masonry>
      </div>
    );
  }
}
