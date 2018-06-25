import React, { Component } from "react";
import { withRouter } from "next/router";
import Layout from "../components/Layout";
import { CourseContainer } from "../containers";

class CoursePage extends Component {
  render() {
    return (
      <Layout>
        <CourseContainer />
      </Layout>
    );
  }
}

export default withRouter(CoursePage);
