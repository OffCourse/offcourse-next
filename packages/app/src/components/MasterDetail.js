import React, { Component } from "react";
import PropTypes from "prop-types";
import { Group } from "@offcourse/atoms";
class Detail extends Component {
  static propTypes = {
    children: PropTypes.node
  };
  render() {
    const { children, ...rest } = this.props;
    return (
      <Group
        minWidth={["100%", "100%", "25rem"]}
        width={["100%", "100%", "55rem"]}
        maxWidth={["100%", "100%", "55rem"]}
        height="calc(100vh - 2.25rem)"
        mr={0}
        mt={6}
        flex="3"
        flexDirection="column"
        justifyContent="stretch"
        alignItems="stretch"
        px={6}
        pb={[6, 6, "4rem"]}
        pl={[6, 6, 0]}
        {...rest}
      >
        {children}
      </Group>
    );
  }
}

class Master extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isAlwaysVisible: PropTypes.bool
  };
  render() {
    const { children, isAlwaysVisible } = this.props;
    return (
      <Group
        display={
          isAlwaysVisible ? ["flex", "flex", "flex"] : ["none", "none", "flex"]
        }
        alignItems="stretch"
        flex="none"
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
  static propTypes = {
    children: PropTypes.node
  };
  render() {
    const { children } = this.props;
    return (
      <Group
        flexDirection={["column", "row", "row"]}
        alignItems={["center", "flex-start", "flex-start"]}
        bg={["white", "grayScale.1", "grayScale.1"]}
        width={["100%", "100%", "auto"]}
        height="calc(100vh - 2.25rem)"
        overflow={["hidden scroll", "hidden visible", "hidden hidden"]}
      >
        {children}
      </Group>
    );
  }
}
