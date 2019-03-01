import React, { useContext } from "react";
import { AppStateContext } from "../contexts";
import PropTypes from "prop-types";
import { ForkCourseDialog } from "../components";
import { CourseProvider } from "../providers";

const ForkCourseDialogContainer = ({ courseId }) => {
  const { route, overlay, flash } = useContext(AppStateContext);
  return (
    <CourseProvider courseId={courseId}>
      {({ fork }) => {
        return (
          <ForkCourseDialog
            closeOverlay={overlay.close}
            forkCourse={async () => {
              const { data } = await fork({ courseId });
              const { curator, goal } = data.forkCourse;
              await flash.success(`you have forked: ${goal}`);
              await overlay.close();
              route.handlers.goToCourse({ curator, goal });
            }}
          />
        );
      }}
    </CourseProvider>
  );
};

ForkCourseDialogContainer.propTypes = {
  courseId: PropTypes.string
};

export default ForkCourseDialogContainer;
