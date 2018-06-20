import system from "system-components";

const TagWrapper = system({
  display: "inline-block",
  color: "black",
  bg: "grayScale.1",
  py: 0,
  px: 4,
  hover: {
    backgroundColor: "primary",
    color: "white"
  }
}).extend`
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-decoration: inherit;
`;

export default TagWrapper;
