import React, { Children, Component } from "react";
import PropTypes from "prop-types";
import { mapIndexed } from "../helpers";
import { isEmpty } from "ramda";
import IconGroupWrapper from "./IconGroupWrapper";
import { Icon } from "@offcourse/atoms";
import { sizes, directions } from "@offcourse/constants";

const { SMALL, NORMAL, LARGE, EXTRA_LARGE } = sizes;
const { HORIZONTAL, VERTICAL } = directions;

const styleProps = {
  [HORIZONTAL]: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  [VERTICAL]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
};

const IconGroup = ({
  icons,
  direction,
  children,
  justifyContent,
  size: groupSize,
  color: groupColor
}) => {
  const renderIcons = () => {
    return mapIndexed(
      ({ name, size, tabIndex, is, color, onClick }, index) => (
        <Icon
          is={is}
          tabIndex={tabIndex}
          color={color || groupColor}
          key={index}
          size={size || groupSize}
          name={name}
          onClick={onClick}
        />
      ),
      icons
    );
  };

  const renderChildren = () => {
    return Children.map(children, child => {
      return React.cloneElement(child, {
        size: groupSize,
        color: groupColor,
        ...child.props
      });
    });
  };

  const groupProps = styleProps[direction];
  return (
    <IconGroupWrapper
      {...groupProps}
      justifyContent={justifyContent || groupProps.justifyContent}
    >
      {isEmpty(icons) ? renderChildren() : renderIcons()}
    </IconGroupWrapper>
  );
};

IconGroup.Icon = Icon;

IconGroup.propTypes = {
  directions: PropTypes.oneOf([HORIZONTAL, VERTICAL]),
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      onClick: PropTypes.func
    })
  ),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  size: PropTypes.oneOf([SMALL, NORMAL, LARGE, EXTRA_LARGE])
};

IconGroup.defaultProps = {
  direction: HORIZONTAL,
  icons: []
};
export default IconGroup;
