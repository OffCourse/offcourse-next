import React, { memo } from "react";
import PropTypes from "prop-types";
import { Group } from "@offcourse/atoms";

const Detail = ({ children, ...rest }) => {
  return (
    <Group
      minWidth={["100%", "100%", "25rem"]}
      width={["100%", "100%", "55rem"]}
      maxWidth={["100%", "100%", "55rem"]}
      mt={[0, 0, 6]}
      mr={[0, 6, 6]}
      flexDirection="column"
      justifyContent="stretch"
      alignItems="stretch"
      {...rest}
    >
      {children}
    </Group>
  );
};

Detail.propTypes = {
  children: PropTypes.node
};

export default memo(Detail);
