import React, { memo } from "react";
import PropTypes from "prop-types";
import { Group, Button } from "@offcourse/atoms";
import { sizes } from "@offcourse/constants";

const { LARGE } = sizes;

const CourseAction = ({ onClick, label }) => {
  return (
    <Group justifyContent="stretch" alignItems="center" px={[8, 8, 6]} mt={6}>
      <Button onClick={onClick} size={LARGE}>
        {label}
      </Button>
    </Group>
  );
};

CourseAction.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default memo(CourseAction);
