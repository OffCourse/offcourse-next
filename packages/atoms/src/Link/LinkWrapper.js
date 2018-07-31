import system from "system-components";
import { theme as t } from "styled-system";

const LinkWrapper = system(
  {
    is: "a",
    lineHeight: 0,
    borderBottom: 2,
    pb: 0,
    color: "black",
    fontSize: 1,
    m: 0,
    mr: 0,
    mb: 0,
    focus: {
      outline: "none"
    }
  },

  props => ({
    borderColor: props.disabled
      ? t("colors.disabled")(props)
      : t("colors.black")(props),
    cursor: props.disabled ? "default" : "pointer",
    "&:hover": {
      color: props.disabled
        ? t("colors.disabled")(props)
        : t("colors.black")(props),
      borderColor: props.disabled
        ? t("colors.disabled")(props)
        : t("colors.primary")(props)
    }
  })
).extend`
  user-select: none;
  font-family: ${({ theme }) => theme.fonts.bold};
  box-sizing: border-box;
  text-decoration: inherit;
`;

export default LinkWrapper;
