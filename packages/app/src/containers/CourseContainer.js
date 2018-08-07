import React, { Component, Fragment } from "react";
import Composer from "react-composer";
import { goToCourse, goToCollection } from "../tempUtils";
import { CourseCard } from "@offcourse/organisms";
import { CourseCardProvider, CourseProvider } from "../providers";

class CourseContainer extends Component {
  render() {
    const { courseId, curator, goal } = this.props.match.params;
    const courseQuery = { curator, goal };
    console.log(courseId)

    return (
      <Composer
        components={[<CourseProvider courseId={courseId} courseQuery={courseQuery} />, <CourseCardProvider />]}
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
