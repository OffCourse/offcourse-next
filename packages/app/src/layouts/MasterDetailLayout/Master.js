import React, { memo } from "react";
import PropTypes from "prop-types";
import { Group } from "@offcourse/atoms";

const Master = ({ children, isAlwaysVisible }) => {
  return (
    <Group
      display={
        isAlwaysVisible ? ["flex", "flex", "flex"] : ["none", "none", "flex"]
      }
      alignItems="stretch"
      flex="none"
      p={6}
    >
      {children}
    </Group>
  );
};

Master.propTypes = {
  children: PropTypes.node.isRequired,
  isAlwaysVisible: PropTypes.bool
};

export default memo(Master);
