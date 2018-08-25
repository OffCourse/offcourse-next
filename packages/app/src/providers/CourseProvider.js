import React, { Component } from "react";
import PropTypes from "prop-types";
import Composer from "react-composer";
import { Query, Mutation } from "../components";
import { queries, mutations } from "../graphql";
import { identity, map } from "ramda";
import { AuthProvider } from ".";
import CheckpointsFragment from "../graphql/fragments/Checkpoints.graphql";
import ForkFragment from "../graphql/fragments/Fork.graphql";

export default class CourseProvider extends Component {
  static propTypes = {
    children: PropTypes.func,
    courseId: PropTypes.string,
    courseQuery: PropTypes.shape({
      goal: PropTypes.string,
      curator: PropTypes.string
    })
  };
  render() {
    const { children, courseId, courseQuery } = this.props;
    return (
      <AuthProvider>
        {({ userName }) => {
          const query = userName ? queries.courseWithStatus : queries.course;
          const variables = courseId ? { courseId } : { courseQuery };
          return (
            <Composer
              components={[
                <Query query={query} variables={variables} />,
                <Mutation mutation={mutations.updateStatus} ignoreResults />,
                <Mutation mutation={mutations.forkCourse} />
              ]}
            >
              {([courseResponse, updateStatus, forkCourse]) => {
                const { course } = courseResponse.data;

                if (!course) {
                  return <div>HELLO</div>;
                }

                const userIsCurator = course && course.curator === userName;
                const statusUpdater = ({ courseId, checkpointId, checked }) =>
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
                  });
                const fork = ({ courseId }) => {
                  return forkCourse({
                    variables: { courseId },
                    optimisticResponse: {
                      __typename: "Mutation",
                      forkCourse: {
                        curator: userName,
                        goal: course.goal,
                        __typename: "Course"
                      }
                    },
                    update: (cache, _) => {
                      cache.writeFragment({
                        id: courseId,
                        fragment: ForkFragment,
                        data: {
                          __typename: "Course",
                          fork: {
                            __typename: "Course",
                            curator: userName,
                            goal: course.goal
                          }
                        }
                      });
                    }
                  });
                };

                const value = {
                  course,
                  courseQuery,
                  userName,
                  updateStatus: statusUpdater,
                  userIsCurator,
                  fork,
                  save: () => console.log(course)
                };
                return children(value);
              }}
            </Composer>
          );
        }}
      </AuthProvider>
    );
  }
}
