import React, { Component } from "react";
import PropTypes from "prop-types";
import Composer from "react-composer";
import { Query, Mutation } from "../../components";
import { queries, mutations } from "./graphql";
import { AuthProvider } from "..";
import { fork, save, updateStatus } from "./actions";

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
                <Mutation mutation={mutations.updateStatus} ignoreResults />,
                <Mutation mutation={mutations.fork} />,
                <Mutation mutation={mutations.save} />,
                <Query query={query} variables={variables} />
              ]}
            >
              {([updateCourse, forkCourse, saveCourse, courseResponse]) => {
                const { course } = courseResponse.data;
                const userIsCurator = course && course.curator === userName;
                const value = {
                  course,
                  courseQuery,
                  userName,
                  userIsCurator,
                  updateStatus: updateStatus(updateCourse),
                  fork: fork(forkCourse),
                  save: save(saveCourse, { courseId, curator: userName })
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
