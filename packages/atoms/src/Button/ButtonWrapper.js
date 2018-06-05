import system from "system-components";
import { theme } from "styled-system";

const background = {
  default: "grayScale.3",
  disabled: "disabled",
  primary: "primary",
  positive: "positive",
  warning: "warning",
  negative: "negative"
};

const inverseBackground = {
  default: "primary",
  disabled: "disabled",
  primary: "grayScale.3",
  positive: "grayScale.3",
  warning: "grayScale.3",
  negative: "grayScale.3"
};

const textColor = {
  default: "white",
  disabled: "grayScale.1",
  negative: "white",
  primary: "black",
  warning: "black",
  positive: "black"
};

const inverseText = {
  default: "white",
  disabled: "white",
  negative: "white",
  primary: "white",
  warning: "white",
  positive: "white"
};

const ButtonWrapper = system(
  {
    is: "button",
    display: "flex",
    alignItems: "center",
    height: "2.813rem",
    justifyContent: "center",
    m: 0,
    border: 0,
    fontSize: 1,
    lineHeight: 1,
    minWidth: "5.3333333rem",
    maxWidth: "16rem",
    px: 6,
    py: 4,
    borderBottom: 2
  },
  props => ({
    backgroundColor: theme(`colors.${background[props.variant]}`)(props),
    borderColor: theme(`colors.${inverseBackground[props.variant]}`)(props),
    color: theme(`colors.${textColor[props.variant]}`)(props),
    fontFamily: props.theme.fonts.bold,
    "&:focus": { outline: "none" },
    "&:disabled": { cursor: "default" },
    "> a": {
      color: "inherit",
      textDecoration: "inherit"
    },
    "&:hover": {
      borderColor: theme(`colors.${background[props.variant]}`)(props),
      color: theme(`colors.${inverseText[props.variant]}`)(props),
      backgroundColor: theme(`colors.${inverseBackground[props.variant]}`)(
        props
      )
    },
    boxSizing: "border-box",
    userSelect: "none"
  })
);

export default ButtonWrapper;
