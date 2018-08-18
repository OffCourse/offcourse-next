import React, { Component } from "react";
import { Viewer, Route, MasterDetail, UnderConstruction } from "../components";
import { CourseContainer } from "../containers";
import { Switch } from "react-router-dom";

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
          <Route
            path="/course/:courseId/checkpoint/:checkpointId"
            component={CourseContainer}
          />
        </Master>
        <Detail>
          <Switch>
            <Route
              path="/curator/:curator/goal/:goal/task/:task"
              component={Viewer}
            />
            <Route
              path="/curator/:curator/goal/:goal"
              component={UnderConstruction}
            />
            <Route
              path="/course/:courseId/checkpoint/:checkpointId"
              component={UnderConstruction}
            />
          </Switch>
        </Detail>
      </MasterDetail>
    );
  }
}