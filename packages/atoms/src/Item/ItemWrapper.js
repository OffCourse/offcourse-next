import system from "system-components";

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
    gridTemplateColumns: "1fr"
  },
  props => ({
    boxSizing: "border-box",
    textDecoration: "inherit",
    fontFamily: props.theme.fonts.bold,
    userSelect: "none"
  })
).extend`
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
  &:hover > a {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default ItemWrapper;
