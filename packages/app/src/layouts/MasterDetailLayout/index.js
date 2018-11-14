import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Group } from "@offcourse/atoms";
import Master from "./Master";
import system from "system-components";
import styled from "styled-components";

const MasterDetailLayout = system({
  bg: ["white", "grayScale.1", "grayScale.1"],
  display: ["block", "block", "grid"],
  gridGap: 6,
  m: [0, 6, 6],
  mb: 0,
  height: "calc(100vh - 36px)",
  gridTemplateColumns: ["1fr", "1fr", "18rem 1fr"],
  overflow: ["hidden scroll", "hidden scroll", "hidden hidden"]
});

MasterDetailLayout.Master = styled(Group).attrs({
  alignItems: ["stretch", "center", "center"],
  p: [6, 0, 0],
  pb: [6, 8, 0]
})``;

MasterDetailLayout.Detail = styled(Group).attrs({
  display: "grid",
  overflow: ["hidden auto", "hidden scroll", "hidden scroll"]
})``;

MasterDetailLayout.propTypes = {
  children: PropTypes.node
};

export default MasterDetailLayout;
