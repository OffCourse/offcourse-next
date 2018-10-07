import React, { Children, Component } from "react";
import PropTypes from "prop-types";
import { mapIndexed } from "../helpers";
import { isEmpty } from "ramda";
import IconGroupWrapper from "./IconGroupWrapper";
import { Group, Icon } from "@offcourse/atoms";

const { SMALL, NORMAL, LARGE, EXTRA_LARGE } = Icon.sizes;
const { HORIZONTAL, VERTICAL } = Group.directions;

export default class IconGroup extends Component {
  static Icon = Icon;
  static sizes = Icon.sizes;
  static directions = Group.directions;

  static propTypes = {
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
    /** Size of the icons */
    size: PropTypes.oneOf([SMALL, NORMAL, LARGE, EXTRA_LARGE])
  };

  static defaultProps = {
    direction: HORIZONTAL,
    icons: []
  };

  renderIcons = () => {
    const { icons, size: groupSize, color: groupColor } = this.props;
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

  renderChildren = () => {
    const { children, size, color } = this.props;
    return Children.map(children, child => {
      return React.cloneElement(child, { size, color, ...child.props });
    });
  };

  render() {
    const { icons, direction, justifyContent } = this.props;
    return (
      <IconGroupWrapper
        {...IconGroupWrapper.styleProps[direction]}
        justifyContent="flex-end"
      >
        {isEmpty(icons) ? this.renderChildren() : this.renderIcons()}
      </IconGroupWrapper>
    );
  }
}
