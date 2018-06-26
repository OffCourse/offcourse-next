import React, { Component } from "react";
import { isEmpty } from "ramda";
import { Query } from "react-apollo";
import { Loading } from "@offcourse/atoms";
import { CourseCard } from "@offcourse/organisms";
import { queries } from "../graphql";
import { withRouter } from "next/router";

class CourseContainer extends Component {
  render() {
    const { courseId, ...courseQuery } = this.props.router.query;
    return (
      !isEmpty(courseQuery) && (
        <Query query={queries.course} variables={{ courseQuery }}>
          {({ data, loading, error }) => {
            if (loading) return <Loading size="large" />;
            if (error) return <Loading size="large" />;
            return <CourseCard course={data.course} />;
          }}
        </Query>
      )
    );
  }
}

export default withRouter(CourseContainer);
