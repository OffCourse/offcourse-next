import React from "react";
import PropTypes from "prop-types";
import { sizes } from "@offcourse/constants";
import { Icon } from "@offcourse/atoms";
import { CourseCard } from "@offcourse/organisms";
import { CourseAction } from "../../../components";
import { MasterDetailLayout } from "../../../layouts";

const { LARGE } = sizes;
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
        onGoalClick={goToCourse}
        onCheckpointClick={goToCheckpoint}
        onCheckpointToggle={toggleCheckpoint}
        onTagClick={goToCollection}
        course={course}
        borderBottom={[0, 2, 2]}
        borderColor={["grayScale.1", "grayScale.2", "grayScale.2"]}
        expandable={false}
        headerIcon={
          <Icon
            onClick={goHome}
            size={LARGE}
            color="grayScale.2"
            name="remove"
          />
        }
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
