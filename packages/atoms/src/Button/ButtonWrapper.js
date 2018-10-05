import system from "system-components";

const ButtonWrapper = system(
  {
    is: "button",
    display: "flex",
    alignItems: "center",
    height: "2.813rem",
    justifyContent: "center",
    m: 0,
    mt: 0,
    border: 0,
    fontSize: 1,
    lineHeight: 1,
    minWidth: "5.33333rem",
    maxWidth: "16rem",
    px: 6,
    py: 4,
    borderBottom: 2
  },
  "color",
  "borderColor",
  props => ({
    fontFamily: props.theme.fonts.bold,
    "&:focus": { outline: "none" },
    "&:disabled": { cursor: "default" },
    "> a": {
      color: "inherit",
      textDecoration: "inherit"
    },
    "&:hover": {
      borderColor: props.theme.colors[props.bg],
      color: props.theme.colors[props.inverseColor],
      backgroundColor: props.theme.colors[props.inversBg]
    },
    boxSizing: "border-box",
    userSelect: "none"
  })
);

export default ButtonWrapper;
