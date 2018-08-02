import React, { Component, Fragment } from "react";
import Composer from "react-composer";
import { goToCourse, goToCollection } from "../tempUtils";
import { CourseCard } from "@offcourse/organisms";
import { CourseCardContext, CourseContext } from "../contexts";

class CourseContainer extends Component {
  render() {
    return (
      <Composer
        components={[
          <CourseContext.Consumer />,
          <CourseCardContext.Consumer />,
        ]}
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
