import React from "react";
import { CourseCardLayout } from "@offcourse/organisms";
import PropTypes from "prop-types";

const View = ({ courseCard, handlers, collection }) => {
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
};

View.propTypes = {
  courseCard: PropTypes.object.isRequired,
  handlers: PropTypes.object.isRequired,
  collection: PropTypes.object.isRequired
};

export default View;
