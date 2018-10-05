import system from "system-components";
import styled from "styled-components";

const IconWrapper = system({
  is: "i",
  m: 0,
  p: 0,
  border: 0,
  fontSize: 1,
  lineHeight: 1,
  color: "black",
  bg: "transparent",
  hover: {
    color: "primary"
  },
  focus: {
    outline: "none",
    color: "primary"
  }
});

export default styled(IconWrapper)`
  box-sizing: border-box;
`;
