import React, { Component, Fragment } from "react";
import Composer from "react-composer";
import { goToCourse, goToCollection } from "../tempUtils";
import { CourseCard } from "@offcourse/organisms";
import { CourseCardProvider, CourseProvider } from "../providers";

class CourseContainer extends Component {
  render() {
    const { courseQuery } = this.props;
    return (
      <Composer
        components={[<CourseProvider courseQuery={courseQuery} />, <CourseCardProvider />]}
      >
        {([{ userIsCurator, userName, course, updateStatus }, card]) => (
          <CourseCard
            key={card.initialLevel}
            layout={card.layout}
            initialLevel={card.initialLevel}
            onCuratorClick={goToCollection}
            onCheckpointToggle={userName ? updateStatus : null}
            onTagClick={goToCollection}
            course={course}
          />
        )
        }
      </Composer>
    );
  }
}

export default CourseContainer;
