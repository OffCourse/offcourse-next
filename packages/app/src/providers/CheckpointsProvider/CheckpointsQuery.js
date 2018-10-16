import React, { Component } from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import { queries } from "./graphql";
import { fakeCourse } from "../../fakeCourse";

export default class CheckpointsQuery extends Component {
  static propTypes = {
    children: PropTypes.func,
    userName: PropTypes.string,
    courseId: PropTypes.string
  };
  render() {
    const { children, courseId, userName } = this.props;
    return (
      <Query
        query={queries.checkpoints}
        variables={{
          courseId,
          isAuthenticated: !!userName
        }}
      >
        {({ loading, error, data }) => {
          if (loading) {
            return children(fakeCourse());
          }
          if (error) {
            return children(fakeCourse("error"));
          }
          // return children({ ...fakeCourse(), status: "loading" });
          return children(data);
        }}
      </Query>
    );
    return children({});
  }
}
