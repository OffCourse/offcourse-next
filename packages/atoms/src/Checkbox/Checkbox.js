import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon } from "..";
import CheckboxWrapper from "./CheckboxWrapper";
import LabelWrapper from "./LabelWrapper";
import { sizes } from "@offcourse/constants";

const { NORMAL, LARGE } = sizes;

const boxProps = {
  NORMAL: { boxSize: "1.25rem", labelSize: "1rem" },
  LARGE: { boxSize: "1.66666667rem", labelSize: "1.333333rem" }
};

/**
 * Checkbox component for the offcourse project
 */

class Checkbox extends Component {
  static sizes = sizes;
  static propTypes = {
    /**  allows the user to directly decide if the value is checked or not */
    checked: PropTypes.bool,
    /** an optional callback that triggers when the checkbox changes its value */
    onToggle: PropTypes.func,
    bg: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    size: PropTypes.oneOf([NORMAL, LARGE])
  };

  static defaultProps = {
    size: NORMAL,
    checked: false,
    onToggle: () => null
  };

  state = {
    checked: this.props.checked
  };

  handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    const { onToggle } = this.props;
    this.setState(
      ({ checked }) => ({ checked: !checked }),
      () => onToggle(this.state)
    );
  };

  render() {
    const { checked } = this.state;
    const { bg, size } = this.props;
    const { boxSize, labelSize } = boxProps[size];
    return (
      <CheckboxWrapper size={boxSize} bg={bg} onClick={this.handleClick}>
        <input type="checkbox" readOnly checked={checked} />
        <LabelWrapper bg={bg} size={labelSize}>
          <Icon size={size} name="checkmark" />
        </LabelWrapper>
      </CheckboxWrapper>
    );
  }
}

export default Checkbox;
