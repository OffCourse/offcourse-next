import React from "react";
import { adopt } from "react-adopt";
import { Query, Mutation } from "../components";
import { queries, mutations } from "../graphql";

const mapper = {
  themeQuery: <Query query={queries.theme} />,
  switchTheme: <Mutation mutation={mutations.switchTheme} />
};

const mapProps = ({ themeQuery, switchTheme }) => ({
  ...themeQuery.data.theme,
  switch: switchTheme
});

export default adopt(mapper, mapProps);
