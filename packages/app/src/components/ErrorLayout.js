import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { Group, Button, Heading, Text } from "@offcourse/atoms";
import { sizes } from "@offcourse/constants";
import Avatar from "../assets/offcourse-avatar.svg";
import { Keyframes, animated } from "react-spring";

const { LARGE } = sizes;

export default class NotFound extends Component {
  static propTypes = {
    error: PropTypes.shape({
      message: PropTypes.string.isRequired,
      explanation: PropTypes.string.isRequired
    }).isRequired,
    action: PropTypes.shape({
      message: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired
    }).isRequired,
    animation: PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = {
    goHome: identity
  };

  render() {
    const { error, animation, action } = this.props;
    const Animation = Keyframes.Spring(animation);
    return (
      <Group
        flexDirection={["column-reverse", "row", "row"]}
        height={["calc(100vh - 2rem)", "70vh", "70vh"]}
        alignItems="center"
        alignSelf="stretch"
        maxWidth="100rem"
        justifyContent="space-between"
        pt={[0, 0, "6rem"]}
        px={[8, "6rem", "6rem"]}
      >
        <Group alignItems="flex-start" minWidth="20rem" maxWidth="40rem">
          <Group flex="none">
            <Heading size={LARGE}>{error.message}</Heading>
          </Group>
          <Group flex="none" mb={[7, 6, 6]}>
            <Text size={LARGE}>{error.explanation}</Text>
          </Group>
          <Group flex="none" alignSelf="stretch">
            <Button size={LARGE} onClick={action.onClick}>
              {action.message}
            </Button>
          </Group>
        </Group>
        <Group flexDirection={["column", "row", "row"]} justifyContent="center">
          <Animation>
            {styles => {
              console.log(styles);
              return (
                <animated.div style={{ ...styles }}>
                  <Avatar width="12rem" height="12rem" />
                </animated.div>
              );
            }}
          </Animation>
        </Group>
      </Group>
    );
  }
}
