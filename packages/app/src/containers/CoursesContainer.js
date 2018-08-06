import React, { Component } from "react";
import Composer from "react-composer";
// import { withRouter } from "next/router";
import { CourseCardProvider, CoursesProvider } from "../providers";
import { CourseCardLayout } from "@offcourse/organisms";
import {
  goToCollection,
  goToCourse
} from "../tempUtils";

import { identity } from "ramda";
const withRouter = identity;

class CoursesContainer extends Component {
  render() {
    const { curator, tag } = {};
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
              hasMore={collection.hasMore}
              courses={collection.courses}
              loadMore={collection.loadMore}
            />
          );
        }}
      </Composer >
    );
  }
}

export default withRouter(CoursesContainer);