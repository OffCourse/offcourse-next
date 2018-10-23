import system from "system-components";
import styled from "styled-components";

const BarWrapper = system(
  {
    display: "flex",
    position: "fixed",
    left: 0,
    right: 0,
    bg: "white",
    flexDirection: "column"
  },
  "top",
  "bottom"
);

export default styled(BarWrapper)`
  box-sizing: border-box;
  pointer-events: auto;
`;
