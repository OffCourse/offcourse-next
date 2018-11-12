import React from "react";
import PropTypes from "prop-types";
import { affordances } from "@offcourse/constants";
import { CourseCard } from "@offcourse/organisms";
import { CourseAction } from "../../../components";
import { MasterDetailLayout } from "../../../layouts";

const { CLOSEABLE } = affordances;
const { Master } = MasterDetailLayout;

const MasterSection = ({
  isAlwaysVisible,
  handlers,
  action,
  layout,
  toggleCheckpoint,
  course
}) => {
  const { goHome, goToCheckpoint, goToCollection, goToCourse } = handlers;
  return (
    <Master isAlwaysVisible={isAlwaysVisible}>
      <CourseCard
        onCuratorClick={goToCollection}
        layout={layout}
        onIconClick={goHome}
        onGoalClick={goToCourse}
        onCheckpointClick={goToCheckpoint}
        onCheckpointToggle={toggleCheckpoint}
        onTagClick={goToCollection}
        course={course}
        affordance={CLOSEABLE}
      />
      <CourseAction {...action} />
    </Master>
  );
};

MasterSection.propTypes = {
  handlers: PropTypes.object.isRequired,
  course: PropTypes.object.isRequired,
  action: PropTypes.object.isRequired,
  layout: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  toggleCheckpoint: PropTypes.func,
  isAlwaysVisible: PropTypes.bool
};

export default MasterSection;
