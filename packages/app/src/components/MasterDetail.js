import React, { Component } from "react";
import { Group } from "@offcourse/atoms";
import { Mutation } from "../components";
import { mutations } from "../providers/CourseCardProvider";

class Detail extends Component {
  render() {
    const { children, ...rest } = this.props;
    return (
      <Group
        minWidth={["100%", "100%", "25rem"]}
        width={["100%", "100%", "55rem"]}
        maxWidth={["100%", "100%", "55rem"]}
        height="calc(100vh - 2.25rem)"
        overflow={"hidden scroll"}
        mr={[0, 0, 6]}
        bg={["white", "grayScale.1", "grayScale.1"]}
        flex="3"
        pb={[6, 6, "4rem"]}
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
        position="sticky"
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
            height="calc(100vh - 2.25rem)"
            overflow="hidden"
          >
            {children}
          </Group>
        )}
      </Mutation>
    );
  }
}
