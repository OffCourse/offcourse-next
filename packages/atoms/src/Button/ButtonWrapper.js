import styled from "styled-components";
import system from "system-components";
import { variant } from "styled-system";

const buttonStyle = variant({
  key: "signalColorCombos"
});

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
    width: "5.3333333rem",
    px: 6,
    py: 4,
    borderBottom: 2,
    fontFamily: "bold"
  },
  props => ({
    "&:focus": { outline: "none" },
    "&:disabled": { cursor: "default" },
    "> a": {
      color: "inherit",
      textDecoration: "inherit"
    },
    boxSizing: "border-box",
    userSelect: "none"
  })
);

export default styled(ButtonWrapper)`
  ${buttonStyle};
`;
