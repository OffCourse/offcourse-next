import React, { Component } from "react";
import Composer from "react-composer";
import { isEmpty, identity } from "ramda";
import { Query, Mutation } from "../components";
import { prepCourse, goToCollection } from "../tempUtils";
import { Group, Button } from "@offcourse/atoms";
import { CourseCard } from "@offcourse/organisms";
import { queries, mutations } from "../graphql";
import { withRouter } from "next/router";

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
                return (
                  <Group alignItems="stretch">
                    <CourseCard
                      onCuratorClick={goToCollection}
                      onCheckpointToggle={userName && console.log}
                      onTagClick={goToCollection}
                      course={prepCourse(course)}
                    />
                    {userIsCurator ? (
                      <Group justifyContent="center" alignItems="center" mt={6}>
                        <Button
                          onClick={() =>
                            openOverlay({
                              variables: { mode: "EDIT_COURSE" }
                            })
                          }
                          size="large"
                        >
                          Edit Course
                        </Button>
                      </Group>
                    ) : null}
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
