import React, { Component } from "react";
import { identity } from "ramda";
import Composer from "react-composer";
import { CourseForm } from "@offcourse/organisms";
import { Query } from "../components";
import { queries } from "../graphql";

export default class CourseFormContainer extends Component {
  render() {
    const { courseId, closeOverlay } = this.props;
    if (courseId) {
      return (
        <Composer
          components={[
            <Query query={queries.course} variables={{ courseId }} />
          ]}
        >
          {([queryResult]) => {
            let course = null;
            if (queryResult) {
              course = queryResult.data.course;
            }
            return (
              <CourseForm
                mode="edit"
                course={course}
                onSubmit={identity}
                onCancel={closeOverlay}
              />
            );
          }}
        </Composer>
      );
    } else {
      return (
        <CourseForm mode="create" onSubmit={identity} onCancel={closeOverlay} />
      );
    }
  }
}
