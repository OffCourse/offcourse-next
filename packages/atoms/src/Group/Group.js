import React, { Component } from "react";
import PropTypes from "prop-types";
import GroupWrapper from "./GroupWrapper";
import { directions } from "@offcourse/constants";

const { HORIZONTAL, VERTICAL } = directions;

export default class extends Component {
  static Wrapper = GroupWrapper;
  static directions = directions;

  static propTypes = {
    children: PropTypes.node.isRequired,
    onResize: PropTypes.func
  };

  static defaultProps = {};

  componentDidMount() {
    const { onResize } = this.props;
    if (onResize) {
      this.handleResize();
      window.addEventListener("resize", this.handleResize);
    }
  }

  handleResize = () => {
    if (!this.group) return null;
    const { onResize } = this.props;
    const { offsetWidth } = this.group;
    onResize({ width: offsetWidth });
  };

  render() {
    const { children, direction, onResize, ...rest } = this.props;
    return (
      <GroupWrapper
        ref={el => {
          this.group = el;
        }}
        {...rest}
      >
        {children}
      </GroupWrapper>
    );
  }
}
