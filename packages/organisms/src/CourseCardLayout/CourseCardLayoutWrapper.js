import system from "system-components";

export default system({
  p: 6,
  pr: [6, 0, 0],
  bg: "grayScale.1",
  width: "100%",
  height: "100vh",
  flexDirection: "column",
  overflow: "auto"
}).extend`
  box-sizing: border-box
`;
