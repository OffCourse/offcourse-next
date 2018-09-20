import React, { Component } from "react";
import { Route, MasterDetail } from "../components";
import { CourseContainer, CheckpointContainer } from "../containers";

class Internal extends Component {
  render() {
    const { Master, Detail } = MasterDetail;
    return (
      <MasterDetail>
        <Master>
          <CourseContainer {...this.props} />
        </Master>
        <Detail>
          <CheckpointContainer {...this.props} />
        </Detail>
      </MasterDetail>
    );
  }
}

export default class CheckpointView extends Component {
  render() {
    return (
      <Route
        exact
        path="/curator/:curator/goal/:goal/task/:task"
        component={Internal}
      />
    );
  }
}
