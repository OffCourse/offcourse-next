import React from "react";
import PropTypes from "prop-types";
import { Section, Heading, Group, Icon } from "@offcourse/atoms";

const Header = ({ icon, children, onClick, bg, py, px, p }) => (
  <Section
    bg={bg}
    p={p}
    px={px}
    py={py}
    flexDirection="row"
    alignItems="flex-start"
    justifyContent="space-between"
  >
    <Heading onClick={onClick}>{children}</Heading>
    {icon && (
      <Group alignItems="flex-end" ml={6}>
        {icon}
      </Group>
    )}
  </Section>
);
Header.Icon = Icon;

Header.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.node,
  onClick: PropTypes.func
};

export default Header;
