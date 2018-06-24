import React, { Component } from "react";
import { identity } from "ramda";
import Composer from "react-composer";
import { CourseForm } from "@offcourse/organisms";
import { Query, Mutation } from "react-apollo";
import { queries, mutations } from "../graphql";

export default class CourseFormContainer extends Component {
  render() {
    return (
      <Composer
        components={[
          <Mutation mutation={mutations.closeOverlay} children={identity} />
        ]}
      >
        {([closeOverlay]) => (
          <CourseForm onSubmit={identity} onCancel={closeOverlay} />
        )}
      </Composer>
    );
  }
}
