import system from "system-components";
import styled from "styled-components";

const InfiniteScrollWrapper = system({
  p: 6,
  pr: [6, 0, 0],
  bg: "grayScale.1",
  width: "100%",
  height: "100vh",
  flexDirection: "column",
  overflow: "auto"
});

export default styled(InfiniteScrollWrapper)`
  &:hover {
    will-change: transform;
  }

  box-sizing: border-box;
`;
