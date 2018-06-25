import React, { Component } from "react";
import { isEmpty } from "ramda";
import { Query } from "react-apollo";
import { queries } from "../graphql";
import { withRouter } from "next/router";

class CourseContainer extends Component {
  render() {
    const { courseId, ...courseQuery } = this.props.router.query;
    return (
      !isEmpty(courseQuery) && (
        <Query query={queries.course} variables={{ courseQuery }}>
          {({ data, loading, error }) => {
            return <div>{JSON.stringify(data, null, 2)}</div>;
          }}
        </Query>
      )
    );
  }
}

export default withRouter(CourseContainer);
