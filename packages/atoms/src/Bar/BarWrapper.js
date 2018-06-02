import system from "system-components";

export default system(
  {
    display: "flex",
    justifyContent: "space-between",
    position: "fixed",
    left: 0,
    right: 0,
    bg: "white",
    flexDirection: "row",
    pr: 4,
    alignItems: "center",
    height: "2rem",
    zIndex: 2
  },
  "top",
  "bottom"
).extend`
  box-sizing: border-box
`;
