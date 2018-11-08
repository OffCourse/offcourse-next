import system from "system-components";
import styled from "styled-components";

const BarWrapper = system(
  {
    display: "flex",
    position: "fixed",
    left: 0,
    right: 0,
    borderColor: "grayScale.2",
    bg: "white",
    flex: 1,
    flexDirection: "column"
  },
  "borders",
  "is"
);

export default styled(BarWrapper)`
  box-sizing: border-box;
  pointer-events: auto;
`;
