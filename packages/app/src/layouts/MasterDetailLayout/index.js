import React from "react";
import PropTypes from "prop-types";
import { Group } from "@offcourse/atoms";
import Detail from "./Detail";
import Master from "./Master";

const MasterDetailLayout = ({ children }) => {
  return (
    <Group
      flexDirection={["column", "row", "row"]}
      alignItems={["center", "flex-start", "flex-start"]}
      bg={["white", "grayScale.1", "grayScale.1"]}
      height="calc(100vh - 2.25rem)"
      overflow={["hidden scroll", "hidden visible", "hidden hidden"]}
    >
      {children}
    </Group>
  );
};
MasterDetailLayout.Master = Master;
MasterDetailLayout.Detail = Detail;

MasterDetailLayout.propTypes = {
  children: PropTypes.node
};

export default MasterDetailLayout;
