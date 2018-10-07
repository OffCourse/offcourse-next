import system from "system-components";
import styled from "styled-components";

const TagWrapper = system({
  display: "inline-block",
  color: "black",
  bg: "grayScale.1",
  py: 0,
  px: 4
});

export default styled(TagWrapper)`
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-decoration: inherit;
`;
