import React from "react";
import PropTypes from "prop-types";
import { identity, isEmpty } from "ramda";
import { Group, Section, Heading, Icon } from "@offcourse/atoms";
import { variants, affordances } from "@offcourse/constants";
import headerIcons from "./headerIcons";

const { ACTIVE, INACTIVE } = variants;
const { NONE, CLOSEABLE, CHECKABLE, EXPANDABLE, SHRINKABLE } = affordances;

const Header = ({
  children,
  affordance,
  variant,
  breadcrumbs,
  onClick,
  onIconClick,
  bg
}) => {
  const HeaderIcon = headerIcons[affordance];
  return (
    <Section flexDirection="column" alignItems="stretch" bg={bg}>
      {!isEmpty(breadcrumbs) && <div>{`< ${breadcrumbs[0].text}`}</div>}
      <Group
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Heading variant={variant} onClick={onClick}>
          {children}
        </Heading>
        {HeaderIcon && <HeaderIcon checked={true} onClick={onIconClick} />}
      </Group>
    </Section>
  );
};

Header.Icon = Icon;

Header.propTypes = {
  bg: PropTypes.string,
  children: PropTypes.string.isRequired,
  affordance: PropTypes.oneOf([
    NONE,
    CLOSEABLE,
    CHECKABLE,
    EXPANDABLE,
    SHRINKABLE
  ]),
  onClick: PropTypes.func,
  onIconClick: PropTypes.func,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired
    })
  ),
  variant: PropTypes.oneOf([ACTIVE, INACTIVE])
};

Header.defaultProps = {
  variant: ACTIVE,
  affordance: NONE,
  onClick: identity,
  onIconClick: identity,
  breadcrumbs: []
};

export default Header;
