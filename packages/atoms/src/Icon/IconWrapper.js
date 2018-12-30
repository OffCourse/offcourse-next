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
  bg: "transparent"
});

export default styled(IconWrapper)`
  box-sizing: border-box;
  &:hover {
    color: ${({ onClick, href, theme }) =>
      onClick || href ? theme.colors.primary : theme.colors.black};
  }
  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
