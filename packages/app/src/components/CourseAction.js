import React, { Component } from "react";
import PropTypes from "prop-types";
import { Group, Button } from "@offcourse/atoms";

export default class CourseAction extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  render() {
    const { onClick, label } = this.props;
    return (
      <Group justifyContent="center" alignItems="center" mt={6}>
        <Button onClick={onClick} size="large">
          {label}
        </Button>
      </Group>
    );
  }
}
