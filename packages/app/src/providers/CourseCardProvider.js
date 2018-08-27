import React, { Component } from "react";
import PropTypes from "prop-types";
import Composer from "react-composer";
import { Query, Mutation } from "../components";
import { queries, mutations } from "../graphql";

export default class CourseCardProvider extends Component {
  static propTypes = {
    children: PropTypes.func
  };
  render() {
    const { children } = this.props;
    return (
      <Composer
        components={[
          <Query query={queries.courseCard} />,
          <Mutation mutation={mutations.changeCardSize} />
        ]}
      >
        {([queryResult, changeCardSize]) => {
          const changeLevel = variables => changeCardSize({ variables });
          const value = {
            ...queryResult.data.courseCard,
            changeLevel
          };
          return children(value);
        }}
      </Composer>
    );
  }
}
