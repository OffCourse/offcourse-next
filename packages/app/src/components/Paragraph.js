import React from "react";
import PropTypes from "prop-types";
import { sizes } from "@offcourse/constants";
import { Text, Group } from "@offcourse/atoms";
const { LARGE } = sizes;

const Paragraph = ({ children }) => {
  return (
    <Group mb={7}>
      <Text size={LARGE}>{children}</Text>
    </Group>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired
};

export default Paragraph;
