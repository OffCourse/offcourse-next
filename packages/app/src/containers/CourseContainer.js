import React, { Component, Fragment } from "react";
import Composer from "react-composer";
import { CourseCard } from "@offcourse/organisms";
import { CourseCardProvider, CourseProvider } from "../providers";

class CourseContainer extends Component {
  goToCollection = ({ curator, tag }) => {
    const { history } = this.props;
    history.push(tag ? `/tag/${tag}` : `/curator/${curator}`);
  };

  render() {
    const { courseId, curator, goal } = this.props.match.params;
    const courseQuery = { curator, goal };
    return (
      <Composer
        components={[
          <CourseProvider courseId={courseId} courseQuery={courseQuery} />,
          <CourseCardProvider />
        ]}
      >
        {([{ userName, course, updateStatus }, card]) => (
          <CourseCard
            key={card.initialLevel}
            layout={card.layout}
            initialLevel={card.initialLevel}
            onCuratorClick={this.goToCollection}
            onCheckpointToggle={userName ? updateStatus : null}
            onTagClick={this.goToCollection}
            course={course}
          />
        )}
      </Composer>
    );
  }
}

export default CourseContainer;
