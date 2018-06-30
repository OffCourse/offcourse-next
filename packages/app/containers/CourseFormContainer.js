import React, { Component } from "react";
import { identity } from "ramda";
import Composer from "react-composer";
import { CourseForm } from "@offcourse/organisms";
import { Mutation } from "../components";
import { queries, mutations } from "../graphql";

export default class CourseFormContainer extends Component {
  render() {
    return (
      <Composer components={[<Mutation mutation={mutations.closeOverlay} />]}>
        {([closeOverlay]) => (
          <CourseForm onSubmit={identity} onCancel={closeOverlay} />
        )}
      </Composer>
    );
  }
}
