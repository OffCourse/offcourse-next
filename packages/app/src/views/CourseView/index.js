import React, { Component } from "react";
import { Route } from "../../components";
import Container from "./Container";
import { Switch } from "react-router-dom";

export default class CourseView extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/curator/:curator/goal/:goal/task/:task"
          component={Container}
        />
        <Route
          exact
          path="/curator/:curator/goal/:goal"
          component={Container}
        />
      </Switch>
    );
  }
}
