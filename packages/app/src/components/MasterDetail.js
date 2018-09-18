import React, { Component } from "react";
import { Group } from "@offcourse/atoms";
import { Mutation } from "../components";
import { mutations } from "../providers/CourseCardProvider";

class Detail extends Component {
  render() {
    const { children, ...rest } = this.props;
    return (
      <Group
        style={{ overflowX: "hidden" }}
        minWidth={["100%", "100%", "auto"]}
        maxWidth={["100%", "100%", "55rem"]}
        flex="3"
        {...rest}
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
      <Group
        display={["none", "none", "flex"]}
        alignItems="center"
        width="100%"
        p={6}
      >
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
            width={["100%", "100%", "auto"]}
            onResize={({ width }) => changeCardSize({ variables: { width } })}
          >
            {children}
          </Group>
        )}
      </Mutation>
    );
  }
}
