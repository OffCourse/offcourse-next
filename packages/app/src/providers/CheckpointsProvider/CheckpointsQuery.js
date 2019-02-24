import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import { queries } from "./graphql";

const CheckpointsQuery = ({ children, courseId, userName }) => {
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
          return <div>loading</div>;
        }
        if (error) {
          return <div>error</div>;
        }
        // return children({ ...fakeCourse(), status: "loading" });
        if (data.course) {
          return children(data.course.checkpoints);
        }
        return [];
      }}
    </Query>
  );
};

CheckpointsQuery.propTypes = {
  children: PropTypes.func,
  userName: PropTypes.string,
  courseId: PropTypes.string
};

export default CheckpointsQuery;
