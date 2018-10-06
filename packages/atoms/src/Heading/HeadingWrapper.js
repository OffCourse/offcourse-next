import system from "system-components";
import { themeGet as t } from "styled-system";

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
      color:
        props.href || props.onClick
          ? t("colors.primary")(props)
          : t("colors.black")(props)
    }
  })
);

export default HeadingWrapper;
