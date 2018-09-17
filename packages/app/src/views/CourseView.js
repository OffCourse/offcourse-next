import React, { Component } from "react";
import { Route, MasterDetail, UnderConstruction, Sheet } from "../components";
import { CourseContainer, CourseActionContainer } from "../containers";

class ViewComponent extends Component {
  render() {
    const { Master, Detail } = MasterDetail;
    return (
      <MasterDetail>
        <Master>
          <CourseContainer {...this.props} />
          <CourseActionContainer {...this.props} />
        </Master>
        <Detail>
          <Sheet>
            <UnderConstruction />
          </Sheet>
        </Detail>
      </MasterDetail>
    );
  }
}

export default class CourseView extends Component {
  render() {
    return (
      <Route
        exact
        path="/curator/:curator/goal/:goal"
        component={ViewComponent}
      />
    );
  }
}
