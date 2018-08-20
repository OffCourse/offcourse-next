import React, { Component } from "react";
import PropTypes from "prop-types";
import Composer from "react-composer";
import { Query, Mutation } from "../components";
import { queries, mutations } from "../graphql";
import { map } from "ramda";
import { AuthProvider } from ".";
import CheckpointsFragment from "../graphql/fragments/Checkpoints.graphql";

export default class CourseProvider extends Component {
  static propTypes = {
    children: PropTypes.func,
    courseId: PropTypes.string,
    courseQuery: PropTypes.shape({
      goal: PropTypes.string.isRequired,
      curator: PropTypes.string.isRequired
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
                <Mutation mutation={mutations.updateStatus} ignoreResults />
              ]}
            >
              {([courseResponse, updateStatus]) => {
                const { course } = courseResponse.data;
                const userIsCurator = course.curator === userName;
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

                const value = {
                  course,
                  courseQuery,
                  userName,
                  updateStatus: statusUpdater,
                  userIsCurator
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
