import React, { Component } from "react";
import { CourseCardLayout } from "@offcourse/organisms";
import PropTypes from "prop-types";

export default class View extends Component {
  static propTypes = {
    courseCard: PropTypes.object.isRequired,
    handlers: PropTypes.object.isRequired,
    collection: PropTypes.object.isRequired
  };

  render() {
    const { courseCard, handlers, collection } = this.props;
    const { goToCheckpoint, goToCollection, goToCourse } = handlers;

    return (
      <CourseCardLayout
        initialCardLevel={courseCard.initialLevel}
        onResize={courseCard.changeLevel}
        key={courseCard.initialLevel}
        layout={courseCard.layout}
        goToCollection={goToCollection}
        goToCourse={goToCourse}
        goToCheckpoint={goToCheckpoint}
        hasMore={collection.hasMore}
        courses={collection.courses}
        loadMore={collection.loadMore}
      />
    );
  }
}
