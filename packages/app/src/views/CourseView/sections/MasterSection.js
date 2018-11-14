import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { affordances } from "@offcourse/constants";
import { CourseCard, LoadingCard } from "@offcourse/organisms";
import { CourseAction } from "../../../components";
import { MasterDetailLayout } from "../../../layouts";

const { CLOSEABLE } = affordances;
const { Master } = MasterDetailLayout;

const MasterSection = ({
  handlers,
  action,
  layout,
  isLoggedIn,
  toggleCheckpoint,
  display,
  course
}) => {
  const { goHome, goToCheckpoint, goToCollection, goToCourse } = handlers;
  const { loading } = course;

  return (
    <Master display={loading ? ["flex", "flex", "flex"] : display}>
      {loading ? (
        <LoadingCard />
      ) : (
        <Fragment>
          <CourseCard
            isLoggedIn={isLoggedIn}
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
        </Fragment>
      )}
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
