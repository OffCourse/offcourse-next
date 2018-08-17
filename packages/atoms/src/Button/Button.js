import React, { Component } from "react";
import PropTypes from "prop-types";
import ButtonWrapper from "./ButtonWrapper";
import { formatTitle } from "../helpers";

/**
 * The button component for the Offcourse project
 */

class Button extends Component {
  static propTypes = {
    /** determines if the button should be disabled */
    disabled: PropTypes.bool,
    /** determines the status of the button */
    variant: PropTypes.oneOf([
      "default",
      "primary",
      "positive",
      "warning",
      "negative"
    ]),
    /** the text that is displayed on the button */
    children: PropTypes.string,
    /** code that the button should execute when clicked */
    onClick: PropTypes.func,
    /** a url that the button should link to, automatically turns the button into the basic type */
    href: PropTypes.string,
    /** only accept a type prop when type is submit */
    type: PropTypes.oneOf(["submit", "button"]),
    /** the size of the button */
    size: PropTypes.oneOf(["small", "medium", "large"]),
    tabindex: PropTypes.number,
    mt: PropTypes.number
  };

  static defaultProps = {
    variant: "default",
    size: "medium",
    disabled: false,
    type: "button"
  };

  handleClick = e => {
    const { onClick } = this.props;
    e.preventDefault();
    onClick();
  };

  render() {
    const {
      href,
      type,
      children,
      onClick,
      tabindex,
      variant,
      mt,
      disabled,
      size
    } = this.props;

    const buttonType = type || "button";

    const widths = {
      small: "5.33333rem",
      medium: "8rem",
      large: "16rem"
    };

    const text = formatTitle(children);

    return (
      <ButtonWrapper
        mt={mt}
        type={buttonType}
        variant={disabled ? "disabled" : variant}
        disabled={disabled}
        onClick={onClick}
        tabIndex={tabindex || 1}
        minWidth={widths[size]}
        maxWidth={widths[size]}
      >
        {href ? <a href={!disabled ? href : undefined}>{text}</a> : text}
      </ButtonWrapper>
    );
  }
}

export default Button;
