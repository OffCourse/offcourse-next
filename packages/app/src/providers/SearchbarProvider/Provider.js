import React from "react";
import { adopt } from "react-adopt";
import { Query, Mutation } from "../../components";
import { queries, mutations } from "./graphql";

const mapper = {
  searchbarQuery: <Query query={queries.searchbar} />,
  toggleSearchbar: <Mutation mutation={mutations.toggleSearchbar} />,
  closeSearchbar: <Mutation mutation={mutations.closeSearchbar} />
};

const mapProps = ({ searchbarQuery, toggleSearchbar, closeSearchbar }) => ({
  ...searchbarQuery.data.searchbar,
  toggle: toggleSearchbar,
  close: closeSearchbar
});

export default adopt(mapper, mapProps);
