import React, { Component } from "react";
import { Viewer, Route, MasterDetail, UnderConstruction } from "../components";
import {
  CourseContainer,
  CheckpointContainer,
  CourseActionContainer
} from "../containers";
import { Switch } from "react-router-dom";

export default class CourseView extends Component {
  render() {
    const { Master, Detail } = MasterDetail;
    return (
      <MasterDetail>
        <Master>
          <Switch>
            <Route
              path="/curator/:curator/goal/:goal/task/:task"
              component={CourseContainer}
            />
            <Route
              path="/curator/:curator/goal/:goal"
              component={CourseContainer}
            />
            <Route path="/course/:courseId" component={CourseContainer} />
            <Route
              path="/course/:courseId/checkpoint/:checkpointId"
              component={CourseContainer}
            />
          </Switch>
          <Switch>
            <Route
              path="/curator/:curator/goal/:goal"
              component={CourseActionContainer}
            />
            <Route
              path="/curator/:curator/goal/:goal/task/:task"
              component={CourseActionContainer}
            />
            <Route path="/course/:courseId" component={CourseActionContainer} />
          </Switch>
        </Master>
        <Detail>
          <Switch>
            <Route
              path="/curator/:curator/goal/:goal/task/:task"
              component={CheckpointContainer}
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
