import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { identity } from "ramda";
import GroupWrapper from "./GroupWrapper";

export default class extends Component {
  static Wrapper = GroupWrapper;

  static propTypes = {
    onResize: PropTypes.func
  }

  static defaultProps = {}

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
    const { children, onResize, ...rest } = this.props;
    return (
      <GroupWrapper
        innerRef={el => {
          this.group = el;
        }}
        {...rest}>
        {children}
      </GroupWrapper>
    )
  }
}
