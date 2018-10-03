import system from "system-components";

export default system({
  p: 6,
  pr: [6, 0, 0],
  bg: "grayScale.1",
  width: "100%",
  height: "100%",
  flexDirection: "column",
  overflow: "auto",
  display: "flex"
}).extend`
  box-sizing: border-box
`;
