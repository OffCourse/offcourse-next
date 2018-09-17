import React from "react";
import { adopt } from "react-adopt";
import { Query, Mutation } from "../../components";
import { queries, mutations } from "./graphql";

const mapper = {
  courseCardQuery: <Query query={queries.courseCard} />,
  changeCardSize: <Mutation mutation={mutations.changeCardSize} />
};

const mapToProps = ({ courseCardQuery, changeCardSize }) => ({
  ...courseCardQuery.data.courseCard,
  changeLevel: variables => changeCardSize({ variables })
});

export default adopt(mapper, mapToProps);
