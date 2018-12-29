import React from "react";
import styled from "styled-components";
import { CourseCard } from "@offcourse/organisms";
import PropTypes from "prop-types";

import { affordances, sizes } from "@offcourse/constants";
const { NORMAL, LARGE } = sizes;
const { SELECTABLE } = affordances;

const DisplayCardWrapper = styled("div")``;

const DisplayCard = ({
  course,
  size,
  goToCourse,
  goToCheckpoint,
  goToCollection
}) => {
  return (
    <DisplayCardWrapper className={`${size}-card`}>
      <CourseCard
        affordance={SELECTABLE}
        onGoalClick={goToCourse}
        onCheckpointClick={goToCheckpoint}
        onCuratorClick={goToCollection}
        onTagClick={goToCollection}
        course={course}
      />
    </DisplayCardWrapper>
  );
};

DisplayCard.propTypes = {
  course: PropTypes.object,
  size: PropTypes.oneOf([LARGE, NORMAL]),
  goToCheckpoint: PropTypes.func,
  goToCollection: PropTypes.func,
  goToCourse: PropTypes.func
};

export default DisplayCard;
