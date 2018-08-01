import React, { Component } from "react";
import { withRouter } from "next/router";
import Layout from "../components/Layout";
import MasterDetail from "../components/MasterDetail";
import UnderConstruction from "../components/UnderConstruction";
import { CourseContainer } from "../containers";

const { Master, Detail } = MasterDetail;
class CoursePage extends Component {
  render() {
    return (
      <Layout>
        <MasterDetail>
          <Master>
            <CourseContainer />
          </Master>
          <Detail>
            <UnderConstruction />
          </Detail>
        </MasterDetail>
      </Layout>
    );
  }
}

export default withRouter(CoursePage);
