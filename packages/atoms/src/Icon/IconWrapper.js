import system from "system-components";

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
}).extend`
  box-sizing: border-box;
`;

export default IconWrapper;
