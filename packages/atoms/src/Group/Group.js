import React, { Component } from "react";
import PropTypes from "prop-types";
import GroupWrapper from "./GroupWrapper";

class Group extends Component {
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

Group.Wrapper = GroupWrapper;

Group.propTypes = {
  children: PropTypes.node,
  onResize: PropTypes.func
};

export default Group;
