import React, { Component } from "react";
import PropTypes from "prop-types";
import { Adopt } from "react-adopt";
import { CourseCardProvider, CoursesProvider } from "../providers";
import { CourseCardLayout } from "@offcourse/organisms";

const mapper = {
  collection: ({ searchTerm, curator, tag, render }) => (
    <CoursesProvider curator={curator} tag={tag || searchTerm}>
      {render}
    </CoursesProvider>
  ),
  courseCard: <CourseCardProvider />
};

class CoursesContainer extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        courseId: PropTypes.string,
        curator: PropTypes.string,
        goal: PropTypes.string
      }).isRequired
    }).isRequired,
    handlers: PropTypes.shape({
      goToCollection: PropTypes.func.isRequired,
      goToCourse: PropTypes.func.isRequired,
      goToCheckpoint: PropTypes.func.isRequired
    }).isRequired
  };

  render() {
    const { match, handlers } = this.props;
    const { curator, tag, searchTerm } = match.params;
    const { goToCollection, goToCourse, goToCheckpoint } = handlers;
    return (
      <Adopt
        curator={curator}
        tag={tag}
        searchTerm={searchTerm}
        mapper={mapper}
      >
        {({ collection, courseCard }) => {
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
        }}
      </Adopt>
    );
  }
}

export default CoursesContainer;
