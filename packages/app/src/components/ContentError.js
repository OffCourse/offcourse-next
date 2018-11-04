import React from "react";
import PropTypes from "prop-types";
import { Text, Heading, Avatar, Card, Group } from "@offcourse/atoms";
import { sizes } from "@offcourse/constants";

const { LARGE } = sizes;

const ContentError = () => {
  return (
    <Card p={8}>
      <Group alignItems="center">
        <Group mb={6}>
          <Avatar size={LARGE} variant="contentError" />
        </Group>
        <Group mb={6}>
          <Heading>That Didn’t Go The Way We Planned...</Heading>
        </Group>
        <Group mx={8} mb={6}>
          <Text size={LARGE}>
            Sometimes technology seems to have its own way of doing things.
            Currently, this source doesn’t allow us to easily import its
            content. For now, why don’t you check out the content on the
            original webpage instead?
          </Text>
        </Group>
      </Group>
    </Card>
  );
};

ContentError.propTypes = {};

export default ContentError;
