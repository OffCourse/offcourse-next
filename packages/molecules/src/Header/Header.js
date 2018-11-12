import React, { memo } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { Group, Section, Heading, Icon } from "@offcourse/atoms";
import { variants, affordances } from "@offcourse/constants";
import { Breadcrumbs } from "..";
import headerIcons from "./headerIcons";
import HeadingWrapper from "./HeadingWrapper";

const { ACTIVE, INACTIVE } = variants;
const { NONE, CLOSEABLE, CHECKABLE, EXPANDABLE, SHRINKABLE } = affordances;

const Header = ({
  children,
  affordance,
  variant,
  breadcrumbs,
  onClick,
  onIconClick,
  px,
  py,
  bg
}) => {
  const HeaderIcon = headerIcons[affordance];
  return (
    <Section
      px={px}
      py={py}
      flexDirection="column"
      alignItems="stretch"
      bg={bg}
    >
      <Breadcrumbs
        display={["flex", "none", "none"]}
        pb={[3, 0, 0]}
        breadcrumbs={breadcrumbs}
      />
      <HeadingWrapper>
        <Heading variant={variant} onClick={onClick}>
          {children}
        </Heading>
        {HeaderIcon && (
          <Group alignItems="flex-end">
            <HeaderIcon parentBg={bg} checked={true} onClick={onIconClick} />
          </Group>
        )}
      </HeadingWrapper>
    </Section>
  );
};

Header.Icon = Icon;

Header.propTypes = {
  bg: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  px: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number
  ]),
  py: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number
  ]),
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

export default memo(Header);
