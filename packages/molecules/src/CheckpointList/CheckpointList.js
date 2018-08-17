import React, { Component } from "react";
import PropTypes from "prop-types";
import { map } from "ramda";
import { List, CheckpointItem } from "..";

export default class CheckpointList extends Component {
  static propTypes = {
    onToggle: PropTypes.func,
    onClick: PropTypes.func,
    checkpoints: PropTypes.array
  };

  static defaultProps = {
    checkpoints: []
  };

  renderChildren() {
    const { checkpoints, onClick, onToggle } = this.props;
    return map(
      props => (
        <CheckpointItem
          onToggle={onToggle}
          onClick={onClick}
          key={props.checkpointId}
          {...props}
        />
      ),
      checkpoints
    );
  }

  render() {
    return <List>{this.renderChildren()}</List>;
  }
}
