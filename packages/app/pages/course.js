import React, { Component } from "react";
import { withRouter } from "next/router";
import { isEmpty, map, find, propEq } from "ramda";
import Layout from "../components/Layout";
import MasterDetail from "../components/MasterDetail";
import UnderConstruction from "../components/UnderConstruction";
import { CourseContainer, CourseActionContainer } from "../containers";
import CourseAction from "../components/CourseAction";

import {
  CourseContext,
  CourseCardContext,
} from "../contexts";

const { Master, Detail } = MasterDetail;
class CoursePage extends Component {
  render() {
    const { router } = this.props;
    const { courseId, ...courseQuery } = router.query;
    if (isEmpty(courseQuery)) return null;
    return (
      <Layout>
        <MasterDetail>
          <Master>
            <CourseContext courseQuery={courseQuery}>
              <CourseCardContext>
                <CourseContainer />
                <CourseActionContainer />
              </CourseCardContext>
            </CourseContext>
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
