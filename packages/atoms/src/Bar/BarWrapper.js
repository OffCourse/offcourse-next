import system from "system-components";

export default system(
  {
    display: "flex",
    position: "fixed",
    left: 0,
    right: 0,
    bg: "white",
    flexDirection: "column",
    zIndex: 2
  },
  "top",
  "bottom"
).extend`
  box-sizing: border-box
`;
