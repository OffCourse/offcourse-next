import React, { Component } from "react";
import { Route } from "../../components";
import Container from "./Container";

export default class CourseView extends Component {
  render() {
    return <Route exact path="/faq" component={Container} />;
  }
}
