import React from "react";
import PropTypes from "prop-types";
import { Section, Text, Heading, Avatar, Card } from "@offcourse/atoms";
import { errors as errorTypes, sizes } from "@offcourse/constants";
import { errors } from "../content";

const { TOTAL_PANIC, RESOURCE_NOT_LOADING, CHECKPOINT_NOT_FOUND } = errorTypes;
const { LARGE } = sizes;

const ErrorCard = ({ errorType }) => {
  const { message, explanation } = errors[errorType];
  return (
    <Card p={8}>
      <Section
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar size={LARGE} variant={errorType} />
        <Heading mt={8} mb={6}>
          {message}
        </Heading>
        <Text size={LARGE}>{explanation}</Text>
      </Section>
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
