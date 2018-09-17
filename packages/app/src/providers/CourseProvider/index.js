import React from "react";
import { adopt } from "react-adopt";
import { Mutation } from "../../components";
import { mutations } from "./graphql";
import { AuthProvider } from "..";
import { fork, save, updateStatus } from "./actions";
import CourseQuery from "./CourseQuery";

const mapper = {
  userName: ({ auth, render }) => (
    <AuthProvider>{({ userName }) => render(userName)}</AuthProvider>
  ),
  updateStatus: <Mutation mutation={mutations.updateStatus} ignoreResults />,
  forkCourse: <Mutation mutation={mutations.fork} />,
  saveCourse: <Mutation mutation={mutations.save} />,
  course: ({ userName, courseId, courseQuery, render }) => (
    <CourseQuery
      userName={userName}
      courseId={courseId}
      courseQuery={courseQuery}
    >
      {render}
    </CourseQuery>
  )
};

const mapProps = ({
  userName,
  updateStatus: update,
  forkCourse,
  saveCourse,
  courseId,
  courseQuery,
  course
}) => ({
  course,
  courseQuery,
  userName,
  userIsCurator: course && course.curator === userName,
  updateStatus: updateStatus(update),
  fork: fork(forkCourse),
  save: save(saveCourse, { courseId, curator: userName })
});

export default adopt(mapper, mapProps);
