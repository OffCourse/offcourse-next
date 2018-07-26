import system from "system-components";
import { theme } from "styled-system";

const HeadingWrapper = system(
  {
    m: 0,
    color: "inherit",
    lineHeight: 2,
    fontSize: 3
  },
  props => ({
    fontFamily: props.theme.fonts.bold,
    userSelect: "none",
    textDecoration: "inherit",
    cursor: props.href ? "pointer" : "cursor",
    "&:hover": {
      color: (props.href || props.onClick)
        ? theme("colors.primary")(props)
        : theme("colors.black")(props)
    }
  })
);

export default HeadingWrapper;
