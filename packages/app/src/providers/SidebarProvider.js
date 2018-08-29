import React from "react";
import { adopt } from "react-adopt";
import { Query, Mutation } from "../components";
import { queries, mutations } from "../graphql";

const mapper = {
  sidebarQuery: <Query query={queries.sidebar} />,
  toggleSidebar: <Mutation mutation={mutations.toggleSidebar} />
};

const mapProps = ({ sidebarQuery, toggleSidebar }) => ({
  ...sidebarQuery.data.sidebar,
  toggle: toggleSidebar
});

export default adopt(mapper, mapProps);
