import React, { useContext } from "react";
import { AppStateContext } from "../contexts";
import PropTypes from "prop-types";
import { LoadingModal } from "../components";
import { CourseForm } from "@offcourse/organisms";
import { CourseProvider } from "../providers";

const CourseFormContainer = ({ courseId }) => {
  const { route, overlay, flash } = useContext(AppStateContext);
  return (
    <CourseProvider courseId={courseId}>
      {({ course: oldCourse, save }) => {
        if (oldCourse.loading) {
          return <LoadingModal />;
        }
        if (!courseId) {
          return (
            <CourseForm
              mode="create"
              onSubmit={async course => {
                const { data } = await save(course);
                const { goal, curator } = data.addCourse;
                await flash.success(`you have saved: ${goal}`);
                await overlay.close();
                route.handlers.goToCourse({ curator, goal });
              }}
              onCancel={overlay.close}
            />
          );
        }
        if (courseId && oldCourse) {
          return (
            <CourseForm
              mode="edit"
              key={oldCourse.goal}
              course={oldCourse}
              onSubmit={async course => {
                const { data } = await save({ ...course, courseId });
                const { goal } = data.addCourse;
                await flash.success(`you have saved: ${goal}`);
                await overlay.close();
              }}
              onCancel={overlay.close}
            />
          );
        }
        return null;
      }}
    </CourseProvider>
  );
};

CourseFormContainer.propTypes = {
  courseId: PropTypes.string
};

export default CourseFormContainer;
