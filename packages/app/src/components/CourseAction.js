import React, { Component } from "react";
import PropTypes from "prop-types";
import { Group, Button } from "@offcourse/atoms";
import { sizes } from "@offcourse/constants";

const { LARGE } = sizes;

export default class CourseAction extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
  };

  render() {
    const { onClick, label } = this.props;
    return (
      <Group justifyContent="stretch" alignItems="center" px={6} mt={6}>
        <Button onClick={onClick} size={LARGE}>
          {label}
        </Button>
      </Group>
    );
  }
}
