import React, { Component } from "react";
import Composer from "react-composer";
import { isEmpty, identity } from "ramda";
import { Query } from "../components";
import { prepCourse } from "../tempUtils";
import { CourseCard } from "@offcourse/organisms";
import { queries } from "../graphql";
import { withRouter } from "next/router";

class CourseContainer extends Component {
  goToCollection = query => {
    const { router } = this.props;
    router.push({
      pathname: "/",
      query
    });
  };

  goToCourse = query => {
    const { router } = this.props;
    router.push({
      pathname: "/course",
      query
    });
  };

  render() {
    const { courseId, ...courseQuery } = this.props.router.query;

    if (isEmpty(courseQuery)) return null;

    return (
      <Composer
        components={[
          <Query query={queries.course} variables={{ courseQuery }} />,
          <Query query={queries.appState} />
        ]}
      >
        {([courseResponse, authResponse]) => {
          const { userName } = authResponse.data.auth;
          return (
            <CourseCard
              onCuratorClick={this.goToCollection}
              onCheckpointToggle={userName && identity}
              onTagClick={this.goToCollection}
              course={prepCourse(courseResponse.data.course)}
            />
          );
        }}
      </Composer>
    );
  }
}

export default withRouter(CourseContainer);
