import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { MasterDetail, UnderConstruction } from "../components";
import { CourseContainer } from "../containers";
import { Route } from "react-router-dom";

export default class CourseView extends Component {
  render() {
    const { Master, Detail } = MasterDetail;
    return (
      <MasterDetail>
        <Master>
          <Route
            path="/curator/:curator/goal/:goal"
            component={CourseContainer}
          />
          <Route path="/course/:courseId" component={CourseContainer} />
        </Master>
        <Detail>
          <Route
            path="/curator/:curator/goal/:goal"
            component={UnderConstruction}
          />
          <Route path="/course/:courseId/" component={UnderConstruction} />
        </Detail>
      </MasterDetail>
    );
  }
}
