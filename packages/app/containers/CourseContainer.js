import React, { Component, Fragment } from "react";
import Composer from "react-composer";
import CheckpointsFragment from "../graphql/fragments/Checkpoints.graphql";
import { isEmpty, map, find, propEq } from "ramda";
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
                <Query query={queries.courseCard} />,
                <Mutation mutation={mutations.updateStatus} ignoreResults />,
                <Mutation mutation={mutations.openOverlay} />,
              ]}
            >
              {([courseResponse, courseCardResponse, updateStatus, openOverlay]) => {
                const { initialLevel, layout } = courseCardResponse.data.courseCard;
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
                  <Group alignItems="center" flexDirection="column">
                    <CourseCard
                      key={initialLevel}
                      layout={layout}
                      initialLevel={initialLevel}
                      onCuratorClick={goToCollection}
                      onCheckpointToggle={
                        userName ?
                          (({ courseId, checkpointId, checked }) =>
                            updateStatus({
                              variables: {
                                statusUpdate: { courseId, checkpointId }
                              },
                              optimisticResponse: {
                                __typename: "Mutation",
                                updateStatus: {
                                  courseId,
                                  __typename: "Course"
                                }
                              },
                              update: (cache, _) => {
                                const { checkpoints } = cache.readFragment({
                                  id: courseId,
                                  fragment: CheckpointsFragment
                                });

                                cache.writeFragment({
                                  id: courseId,
                                  fragment: CheckpointsFragment,
                                  data: {
                                    __typename: "Course",
                                    checkpoints: map(
                                      checkpoint => ({
                                        ...checkpoint,
                                        completed:
                                          checkpoint.checkpointId === checkpointId
                                            ? checked
                                            : checkpoint.completed
                                      }),
                                      checkpoints
                                    )
                                  }
                                });
                              }
                            })) : null
                      }
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
