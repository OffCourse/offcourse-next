import system from "system-components";

const LabelWrapper = system(
  {
    is: "div",
    p: 0,
    m: 0
  },
  props => ({
    fontFamily: props.theme.fonts.bold,
    display: props.is === "span" ? "inline-block" : "block",
    userSelect: "none"
  })
);

export default LabelWrapper;
