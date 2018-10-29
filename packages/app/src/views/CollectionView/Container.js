import React, { Component } from "react";
import PropTypes from "prop-types";
import { Adopt } from "react-adopt";
import { isEmpty } from "ramda";
import { CourseCardProvider, CoursesProvider } from "../../providers";
import { NoSearchResults } from "../../components";
import View from "./View";

const mapper = {
  collection: ({ searchTerm, curator, tag, render }) => (
    <CoursesProvider searchTerm={searchTerm} curator={curator} tag={tag}>
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
    const { goHome } = handlers;
    return (
      <Adopt
        curator={curator}
        tag={tag}
        searchTerm={searchTerm}
        mapper={mapper}
      >
        {({ collection, courseCard }) => {
          if (isEmpty(collection.courses)) {
            return <NoSearchResults searchTerm={searchTerm} goHome={goHome} />;
          }
          return (
            <View
              handlers={handlers}
              collection={collection}
              courseCard={courseCard}
            />
          );
        }}
      </Adopt>
    );
  }
}

export default CoursesContainer;
