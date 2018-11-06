import React, { memo } from "react";
import PropTypes from "prop-types";
import ButtonWrapper from "./ButtonWrapper";
import { formatTitle } from "../helpers";
import { sizes, variants } from "@offcourse/constants";

const { SMALL, NORMAL, LARGE } = sizes;
const { DEFAULT, DISABLED, INFO, POSITIVE, WARNING, NEGATIVE } = variants;

const widths = {
  SMALL: "5.33333rem",
  NORMAL: "8rem",
  LARGE: ["100%", "16rem", "16rem"]
};

const Button = ({
  href,
  type,
  children,
  onClick,
  tabindex,
  variant,
  mt,
  disabled,
  size
}) => {
  const buttonType = type || "button";
  const label = formatTitle(children);
  return (
    <ButtonWrapper
      mt={mt}
      variant={disabled ? DISABLED : variant}
      type={buttonType}
      disabled={disabled}
      onClick={onClick}
      tabIndex={tabindex || 1}
      width={widths[size]}
    >
      {href ? <a href={!disabled ? href : undefined}>{label}</a> : label}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf([DEFAULT, INFO, POSITIVE, WARNING, NEGATIVE]),
  children: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
  type: PropTypes.oneOf(["submit", "button"]),
  size: PropTypes.oneOf([SMALL, NORMAL, LARGE]),
  tabindex: PropTypes.number,
  mt: PropTypes.number
};

Button.defaultProps = {
  variant: DEFAULT,
  size: NORMAL,
  disabled: false,
  type: "button"
};

export default memo(Button);
