import React, { Component } from "react";
import PropTypes from "prop-types";
import { Group, Button, Heading, Text } from "@offcourse/atoms";
import { sizes } from "@offcourse/constants";
import Avatar from "../assets/offcourse-avatar.svg";
import { Keyframes, animated } from "react-spring";

const { LARGE } = sizes;
const animation = [
  {
    from: { opacity: 0, transform: "translateY(-100vh) rotate(0deg)" },
    to: { opacity: 1, transform: "translateY(0) rotate(360deg)" }
  },
  {
    from: { transform: "translateY(0) rotate(360deg)" },
    to: { transform: "translateY(0) rotate(15deg)" }
  }
];

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
    animation
  };

  render() {
    const { error, animation, action } = this.props;
    const Animation = Keyframes.Spring(animation);
    return (
      <Group
        flexDirection={["column-reverse", "row", "row"]}
        height={["calc(100vh - 2.25rem)", "70vh", "70vh"]}
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
            {styles => (
              <animated.div style={{ ...styles }}>
                <Avatar width="12rem" height="12rem" />
              </animated.div>
            )}
          </Animation>
        </Group>
      </Group>
    );
  }
}
