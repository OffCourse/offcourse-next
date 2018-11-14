import system from "system-components";
import React from "react";
import styled from "styled-components";

const Backdrop = system({
  is: "div",
  display: "block",
  position: "absolute",
  bg: "grayScale.3",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  overflow: "hidden auto"
});

export default styled(({ isVisible, children, ...rest }) => (
  <Backdrop {...rest}>{children}</Backdrop>
))`
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
`;
