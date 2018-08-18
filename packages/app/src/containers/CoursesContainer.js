import React, { Component } from "react";
import PropTypes from "prop-types";
import Composer from "react-composer";
import { CourseCardProvider, CoursesProvider } from "../providers";
import { CourseCardLayout } from "@offcourse/organisms";

class CoursesContainer extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        courseId: PropTypes.string,
        curator: PropTypes.string,
        goal: PropTypes.string
      }).isRequired
    }).isRequired,
    routeHandlers: PropTypes.shape({
      goToCollection: PropTypes.func.isRequired,
      goToCourse: PropTypes.func.isRequired,
      goToCheckpoint: PropTypes.func.isRequired
    }).isRequired
  };

  render() {
    const { match, routeHandlers } = this.props;
    const { curator, tag } = match.params;
    const { goToCollection, goToCourse, goToCheckpoint } = routeHandlers;
    return (
      <Composer
        components={[
          <CoursesProvider curator={curator} tag={tag} />,
          <CourseCardProvider />
        ]}
      >
        {([collection, card]) => {
          return (
            <CourseCardLayout
              initialCardLevel={card.initialLevel}
              onResize={card.changeLevel}
              key={card.initialLevel}
              layout={card.layout}
              goToCollection={goToCollection}
              goToCourse={goToCourse}
              goToCheckpoint={goToCheckpoint}
              hasMore={collection.hasMore}
              courses={collection.courses}
              loadMore={collection.loadMore}
            />
          );
        }}
      </Composer>
    );
  }
}

export default CoursesContainer;
