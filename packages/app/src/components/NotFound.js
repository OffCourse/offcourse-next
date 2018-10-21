import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { Group, Button, Heading, Text } from "@offcourse/atoms";
import { sizes } from "@offcourse/constants";
import Avatar from "../assets/offcourse-avatar.svg";

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
    console.log(Avatar);
    return (
      <Group
        flexDirection={["column-reverse", "row", "row"]}
        height={["calc(100vh - 2rem)", "70vh", "70vh"]}
        alignItems="center"
        alignSelf="stretch"
        justifyContent="space-between"
        p={8}
      >
        <Group alignItems="flex-start" minWidth="20rem" maxWidth="40rem">
          <Group flex="none">
            <Heading size={LARGE}>Woops! You've Outsmarted Us...</Heading>
          </Group>
          <Group flex="none" mb={[7, 6, 6]}>
            <Text size={LARGE}>
              Currently, this page doesn't seem to exist (yet). Please check
              whether you have entered the correct URL in the text field of your
              browser. If that doesn't work, you can use the button below to go
              back to the home page.
            </Text>
          </Group>
          <Group flex="none" alignSelf="stretch">
            <Button size={LARGE} onClick={goHome}>
              Take Me Back
            </Button>
          </Group>
        </Group>
        <Group flexDirection={["column", "row", "row"]} justifyContent="center">
          <Avatar
            style={{ transform: "rotate(15deg)" }}
            width="12rem"
            height="12rem"
          />
        </Group>
      </Group>
    );
  }
}
