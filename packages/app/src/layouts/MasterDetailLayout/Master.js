import React, { memo } from "react";
import PropTypes from "prop-types";
import { Group } from "@offcourse/atoms";

const Master = ({ children, isAlwaysVisible }) => {
  return (
    <Group
      display={
        isAlwaysVisible ? ["flex", "flex", "flex"] : ["none", "none", "flex"]
      }
      alignItems={["stretch", "center", "center"]}
      p={[6, 0, 0]}
      top="2.25rem"
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
