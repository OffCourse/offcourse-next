import React, { Component, createContext } from 'react'
import Composer from "react-composer";
import { Query, Mutation } from "../components";
import { queries, mutations } from "../graphql";
import { isEmpty, map, find, propEq } from "ramda";
import { AuthContext } from "."
import CheckpointsFragment from "../graphql/fragments/Checkpoints.graphql";
const { Provider, Consumer } = createContext();

export default class CourseContext extends Component {
    static Consumer = Consumer;
    static Provider = Provider;

    render() {
        const { children, courseQuery } = this.props;
        return (
            <AuthContext.Consumer>
                {({ userName }) => {
                    const query = userName ? queries.courseWithStatus : queries.course;
                    return (
                        <Composer
                            components={[
                                <Query query={query} variables={{ courseQuery }} />,
                                <Mutation mutation={mutations.updateStatus} ignoreResults />]}>
                            {([courseResponse, updateStatus]) => {
                                const { course } = courseResponse.data;
                                const userIsCurator = course.curator === userName;
                                const statusUpdater = (({ courseId, checkpointId, checked }) =>
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
                                    }));

                                const value = {
                                    course,
                                    courseQuery,
                                    userName,
                                    updateStatus: statusUpdater,
                                    userIsCurator
                                };
                                return (
                                    <CourseContext.Provider value={value}>
                                        {children}
                                    </CourseContext.Provider>
                                )
                            }}
                        </Composer >
                    )
                }}
            </AuthContext.Consumer>
        )
    }
}