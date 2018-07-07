import React, { Component } from "react";
import { identity } from "ramda";
import Composer from "react-composer";
import { CourseForm } from "@offcourse/organisms";
import { Query } from "../components";
import { queries, mutations } from "../graphql";

export default class CourseFormContainer extends Component {
  render() {
    const { courseId, closeOverlay } = this.props;
    return (
      <Composer
        components={[
          courseId && <Query query={queries.course} variables={{ courseId }} />
        ]}
      >
        {([queryResult]) => {
          const { course } = queryResult.data;
          return (
            <CourseForm
              mode={courseId ? "edit" : "create"}
              course={course}
              onSubmit={identity}
              onCancel={closeOverlay}
            />
          );
        }}
      </Composer>
    );
  }
}
