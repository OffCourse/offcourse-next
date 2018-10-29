import React, { Component, Fragment } from "react";
import Container from "./Container";
import { Route } from "../../components";

export default class CollectionView extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Container} />
        <Route exact path="/search/:searchTerm" component={Container} />
        <Route exact path="/curator/:curator" component={Container} />
        <Route exact path="/tag/:tag" component={Container} />
      </Fragment>
    );
  }
}
