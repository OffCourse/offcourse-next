import system from "system-components";
import styled from "styled-components";

const BarWrapper = system(
  {
    display: "flex",
    height: "2.25rem",
    bg: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 0
  },
  "top",
  "bottom",
  "left",
  "right",
  "position",
  "borders",
  "borderColor",
  "space"
);

export default styled(BarWrapper)`
  box-sizing: border-box;
  pointer-events: auto;
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
