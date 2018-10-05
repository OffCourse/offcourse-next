import React, { Component, Fragment } from "react";
import { CoursesContainer } from "../containers";
import { Route } from "../components";

export default class CollectionView extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={CoursesContainer} />
        <Route exact path="/search/:searchTerm" component={CoursesContainer} />
        <Route exact path="/curator/:curator" component={CoursesContainer} />
        <Route exact path="/tag/:tag" component={CoursesContainer} />
      </Fragment>
    );
  }
}
