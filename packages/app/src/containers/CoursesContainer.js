import React, { Component } from "react";
import PropTypes from "prop-types";
import Composer from "react-composer";
import { CourseCardProvider, CoursesProvider } from "../providers";
import { CourseCardLayout } from "@offcourse/organisms";

class CoursesContainer extends Component {
  static propTypes = {
    match: PropTypes.object,
    history: PropTypes.object
  };

  goToCourse = ({ curator, goal }) => {
    const { history } = this.props;
    history.push(`/curator/${curator}/goal/${goal}`);
  };

  goToCollection = ({ curator, tag }) => {
    const { history } = this.props;
    history.push(tag ? `/tag/${tag}` : `/curator/${curator}`);
  };

  goToCheckpoint = ({ curator, goal, task }) => {
    const { history } = this.props;
    history.push(`/curator/${curator}/goal/${goal}/task/${task}`);
  };

  render() {
    const { match } = this.props;
    const { curator, tag } = match.params;
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
              goToCollection={this.goToCollection}
              goToCourse={this.goToCourse}
              goToCheckpoint={this.goToCheckpoint}
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
