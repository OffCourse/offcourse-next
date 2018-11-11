import system from "system-components";

const MainWrapper = system({
  is: "div",
  zIndex: -1,
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  bg: "grayScale.1",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  pt: "2.25rem"
});

export default MainWrapper;
