import React from "react";
import { adopt } from "react-adopt";
import { Query, Mutation } from "../../components";
import { queries, mutations } from "./graphql";

const mapper = {
  sidebarQuery: <Query query={queries.sidebar} />,
  toggleSidebar: <Mutation mutation={mutations.toggleSidebar} />,
  closeSidebar: <Mutation mutation={mutations.closeSidebar} />
};

const mapProps = ({ sidebarQuery, toggleSidebar, closeSidebar }) => ({
  ...sidebarQuery.data.sidebar,
  toggle: toggleSidebar,
  close: closeSidebar
});

export default adopt(mapper, mapProps);
