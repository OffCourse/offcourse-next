import React, { Component } from "react";
import PropTypes from "prop-types";
import ButtonWrapper from "./ButtonWrapper";
import { formatTitle } from "../helpers";
import { sizes, variants } from "@offcourse/constants";

/**
 * The button component for the Offcourse project
 */

const { SMALL, NORMAL, LARGE } = sizes;
const { DEFAULT, DISABLED, INFO, POSITIVE, WARNING, NEGATIVE } = variants;

const textProps = {
  SMALL: { textSize: 0, lineHeight: 0 },
  NORMAL: { textSize: 1, lineHeight: 2 },
  LARGE: { textSize: 2, lineHeight: 3 }
};

const colorProps = {
  DEFAULT: {
    background: "grayScale.3",
    inverseBackground: "primary",
    text: "white",
    inverseText: "white"
  },
  DISABLED: {
    background: "disabled",
    inverseBackground: "disabled",
    text: "grayScale.1",
    inverseText: "white"
  },
  INFO: {
    background: "primary",
    inverseBackground: "grayScale.3",
    text: "black",
    inverseText: "white"
  },
  POSITIVE: {
    background: "positive",
    inverseBackground: "grayScale.3",
    text: "black",
    inverseText: "white"
  },
  WARNING: {
    background: "warning",
    inverseBackground: "grayScale.3",
    text: "black",
    inverseText: "white"
  },
  NEGATIVE: {
    background: "negative",
    inverseBackground: "grayScale.3",
    text: "white",
    inverseText: "white"
  }
};

const widths = {
  SMALL: "5.33333rem",
  MEDIUM: "8rem",
  LARGE: "16rem"
};

class Button extends Component {
  static sizes = sizes;
  static variants = { DEFAULT, INFO, POSITIVE, WARNING, NEGATIVE };
  static propTypes = {
    /** determines if the button should be disabled */
    disabled: PropTypes.bool,
    /** determines the status of the button */
    variant: PropTypes.oneOf([DEFAULT, INFO, POSITIVE, WARNING, NEGATIVE]),
    /** the text that is displayed on the button */
    children: PropTypes.string,
    /** code that the button should execute when clicked */
    onClick: PropTypes.func,
    /** a url that the button should link to, automatically turns the button into the basic type */
    href: PropTypes.string,
    /** only accept a type prop when type is submit */
    type: PropTypes.oneOf(["submit", "button"]),
    /** the size of the button */
    size: PropTypes.oneOf([SMALL, NORMAL, LARGE]),
    tabindex: PropTypes.number,
    mt: PropTypes.number
  };

  static defaultProps = {
    variant: DEFAULT,
    size: NORMAL,
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
    const label = formatTitle(children);
    const { background, text, inverseBackground, inverseText } = colorProps[
      disabled ? DISABLED : variant
    ];

    return (
      <ButtonWrapper
        mt={mt}
        bg={background}
        borderColor={inverseBackground}
        inverseBg={inverseBackground}
        color={text}
        inverseColor={inverseText}
        type={buttonType}
        disabled={disabled}
        onClick={onClick}
        tabIndex={tabindex || 1}
        minWidth={widths[size]}
        maxWidth={widths[size]}
      >
        {href ? <a href={!disabled ? href : undefined}>{label}</a> : label}
      </ButtonWrapper>
    );
  }
}

export default Button;
