import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { Group, Button, Heading, Text } from "@offcourse/atoms";
import { sizes } from "@offcourse/constants";

const { LARGE } = sizes;

export default class NotFound extends Component {
  static propTypes = {
    goHome: PropTypes.func
  };

  static defaultProps = {
    goHome: identity
  };

  render() {
    const { goHome } = this.props;
    return (
      <Group justifyContent="center" alignItems="center">
        <Group justifyContent="center" alignItems="center">
          <Group minWidth="20rem" maxWidth="40rem" p={8}>
            <Group mb={4}>
              <Heading>Woops! You've Outsmarted Us...</Heading>
            </Group>
            <Group mb={6}>
              <Text>
                Currently, this page doesn't seem to exist (yet). Please check
                whether you have entered the correct URL in the text field of
                your browser. If that doesn't work, you can use the button below
                to go back to the home page.
              </Text>
            </Group>
            <Button size={LARGE} onClick={goHome}>
              Take Me Back
            </Button>
          </Group>
        </Group>
      </Group>
    );
  }
}
