import React, { Component } from "react";
import Composer from "react-composer";
import { isEmpty, identity } from "ramda";
import { Query } from "../components";
import { prepCourse, goToCollection, goToCourse } from "../tempUtils";
import { CourseCard } from "@offcourse/organisms";
import { queries } from "../graphql";
import { withRouter } from "next/router";

class CourseContainer extends Component {
  render() {
    const { router } = this.props;
    const { courseId, ...courseQuery } = router.query;

    if (isEmpty(courseQuery)) return null;

    return (
      <Composer
        components={[
          <Query query={queries.course} variables={{ courseQuery }} />,
          <Query query={queries.auth} />
        ]}
      >
        {([courseResponse, authResponse]) => {
          const { userName } = authResponse.data.auth;
          return (
            <CourseCard
              onCuratorClick={goToCollection}
              onCheckpointToggle={userName && identity}
              onTagClick={goToCollection}
              course={prepCourse(courseResponse.data.course)}
            />
          );
        }}
      </Composer>
    );
  }
}

export default withRouter(CourseContainer);
