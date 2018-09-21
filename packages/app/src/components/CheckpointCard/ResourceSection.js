import React, { Component } from "react";
import PropTypes from "prop-types";
import { Group, Text } from "@offcourse/atoms";

export default class ResourceSection extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
  };

  render() {
    const { title, description } = this.props;
    return (
      <Group mr="3rem">
        <Text>{title}</Text>
        {description && (
          <Group mt={6}>
            <Text>{description}</Text>
          </Group>
        )}
      </Group>
    );
  }
}
