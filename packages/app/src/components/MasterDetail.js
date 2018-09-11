import React, { Component } from "react";
import { Group } from "@offcourse/atoms";
import { Mutation } from "../components";
import { mutations } from "../providers/CourseCardProvider";

class Detail extends Component {
  render() {
    const { children } = this.props;
    return (
      <Group
        style={{ overflowX: "hidden" }}
        maxWidth={["100%", "55rem", "55rem"]}
        flex="3"
      >
        {children}
      </Group>
    );
  }
}

class Master extends Component {
  render() {
    const { children } = this.props;
    return (
      <Group alignItems="center" width="100%" p={6}>
        {children}
      </Group>
    );
  }
}

export default class MasterDetail extends Component {
  static Master = Master;
  static Detail = Detail;
  render() {
    const { children } = this.props;
    return (
      <Mutation mutation={mutations.changeCardSize}>
        {changeCardSize => (
          <Group
            flexDirection={["column", "row", "row"]}
            alignItems={["center", "flex-start", "flex-start"]}
            onResize={({ width }) => changeCardSize({ variables: { width } })}
          >
            {children}
          </Group>
        )}
      </Mutation>
    );
  }
}
