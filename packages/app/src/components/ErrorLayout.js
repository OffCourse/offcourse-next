import React, { Component } from "react";
import PropTypes from "prop-types";
import { Group, Button, Heading, Text } from "@offcourse/atoms";
import { sizes } from "@offcourse/constants";
import Avatar from "../assets/offcourse-avatar.svg";

const { NORMAL, LARGE } = sizes;

export default class NotFound extends Component {
  static propTypes = {
    error: PropTypes.shape({
      message: PropTypes.string.isRequired,
      explanation: PropTypes.string.isRequired
    }).isRequired,
    action: PropTypes.shape({
      message: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired
    }).isRequired
  };

  render() {
    const { error, action } = this.props;
    return (
      <Group
        alignItems={["center", "center", "center"]}
        mb={8}
        overflow="hidden scroll"
      >
        <Group
          flexDirection={["column-reverse", "row", "row"]}
          height={["calc(100vh - 2.25rem)", "70vh", "70vh"]}
          maxWidth="100rem"
          alignItems={["center", "center", "center"]}
          justifyContent={["flex-start", "center", "center"]}
          p={6}
        >
          <Group minWidth="20rem" maxWidth="40rem">
            <Group mb={4} flex="none">
              <Heading size={LARGE}>{error.message}</Heading>
            </Group>
            <Group flex="none" mb={[7, 6, 6]}>
              <Text size={LARGE}>{error.explanation}</Text>
            </Group>
            {action && (
              <Group flex="none" alignSelf="stretch">
                <Button size={LARGE} onClick={action.onClick}>
                  {action.message}
                </Button>
              </Group>
            )}
          </Group>
          <Group justifyContent="center" alignItems="center">
            <Avatar width="12rem" height="12rem" />
          </Group>
        </Group>
      </Group>
    );
  }
}
