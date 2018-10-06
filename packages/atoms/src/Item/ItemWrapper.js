import system from "system-components";
import styled from "styled-components";

const ItemWrapper = system(
  {
    is: "div",
    display: "grid",
    bg: "grayScale.1",
    px: 4,
    py: 4,
    lineHeight: 1,
    fontSize: 1,
    alignItems: "center",
    justifyContent: "space-between",
    color: "black",
    gridTemplateColumns: "1fr",
    fontFamily: "bold"
  },
  props => ({
    boxSizing: "border-box",
    textDecoration: "inherit",
    userSelect: "none"
  })
);

export default styled(ItemWrapper)`
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
  &:hover > a {
    color: ${({ theme }) => theme.colors.white};
  }
`;
