import React, { memo } from "react";
import PropTypes from "prop-types";
import { Avatar, Group, Button, Heading, Text } from "@offcourse/atoms";
import { sizes } from "@offcourse/constants";

const { LARGE, EXTRA_LARGE } = sizes;

const ErrorLayout = ({ error, action }) => {
  return (
    <Group overflow="hidden scroll">
      <Group
        flexDirection={["column-reverse", "row", "row"]}
        alignSelf="center"
        flex={["none", 1, 1]}
        alignItems={["center", "center", "center"]}
        justifyContent={["flex-start", "center", "center"]}
        p={[8, 6, 6]}
      >
        <Group maxWidth="40rem">
          <Group mb={6} flex="none">
            <Heading>{error.message}</Heading>
          </Group>
          <Group flex="none" mb={[6, 6, 6]}>
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
        <Group mb={8} justifyContent="center" alignItems="center">
          <Avatar variant={error.errorType} size={EXTRA_LARGE} />
        </Group>
      </Group>
    </Group>
  );
};

ErrorLayout.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired
  }).isRequired,
  action: PropTypes.shape({
    message: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }).isRequired
};

export default memo(ErrorLayout);
