import React, { Component } from "react";
import Composer from "react-composer";
import { isEmpty, find, propEq } from "ramda";
import { Query, Mutation } from "../components";
import { goToCourse, goToCollection } from "../tempUtils";
import CourseAction from "../components/CourseAction";
import { Group } from "@offcourse/atoms";
import { CourseCard } from "@offcourse/organisms";
import { queries, mutations } from "../graphql";
import { withRouter } from "next/router";
import { overlayModes } from "@offcourse/constants";

const { EDIT_COURSE } = overlayModes;

class CourseContainer extends Component {
  render() {
    const { router } = this.props;
    const { courseId, ...courseQuery } = router.query;

    if (isEmpty(courseQuery)) return null;

    return (
      <Query query={queries.auth}>
        {authResponse => {
          const { userName } = authResponse.data.auth;
          const query = userName ? queries.courseWithStatus : queries.course;
          return (
            <Composer
              components={[
                <Query query={query} variables={{ courseQuery }} />,
                <Mutation mutation={mutations.openOverlay} />
              ]}
            >
              {([courseResponse, openOverlay]) => {
                const { course } = courseResponse.data;
                const userIsCurator = course.curator === userName;
                const actions = [
                  {
                    condition: userIsCurator,
                    onClick: () =>
                      openOverlay({
                        variables: {
                          mode: EDIT_COURSE,
                          courseId: course.courseId
                        }
                      }),
                    label: "Edit Course"
                  },
                  {
                    condition: !!course.fork && !userIsCurator,
                    onClick: () =>
                      goToCourse({ ...courseQuery, curator: userName }),
                    label: "Go To Fork"
                  },
                  {
                    condition: !course.fork && !userIsCurator,
                    onClick: () => alert("working on it"),
                    label: "Fork Course"
                  }
                ];

                const { onClick, label } = find(
                  propEq("condition", true),
                  actions
                );

                return (
                  <Group alignItems="stretch">
                    <CourseCard
                      onCuratorClick={goToCollection}
                      onCheckpointToggle={userName && console.log}
                      onTagClick={goToCollection}
                      course={course}
                    />
                    <CourseAction onClick={onClick} label={label} />
                  </Group>
                );
              }}
            </Composer>
          );
        }}
      </Query>
    );
  }
}

export default withRouter(CourseContainer);
