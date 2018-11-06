import React from "react";
import PropTypes from "prop-types";
import { Text, Heading, Avatar, Card, Group } from "@offcourse/atoms";
import { errors as errorTypes, sizes } from "@offcourse/constants";
import { errors } from "../content";

const { TOTAL_PANIC, RESOURCE_NOT_LOADING, CHECKPOINT_NOT_FOUND } = errorTypes;
const { LARGE } = sizes;

const ErrorCard = ({ errorType }) => {
  const { message, explanation } = errors[errorType];
  return (
    <Card p={8}>
      <Group alignItems="center">
        <Group mb={6}>
          <Avatar size={LARGE} variant={errorType} />
        </Group>
        <Group mb={6}>
          <Heading>{message}</Heading>
        </Group>
        <Text size={LARGE}>{explanation}</Text>
      </Group>
    </Card>
  );
};

ErrorCard.defaultProps = {
  errorType: TOTAL_PANIC
};

ErrorCard.propTypes = {
  errorType: PropTypes.oneOf([
    TOTAL_PANIC,
    RESOURCE_NOT_LOADING,
    CHECKPOINT_NOT_FOUND
  ])
};

export default ErrorCard;
