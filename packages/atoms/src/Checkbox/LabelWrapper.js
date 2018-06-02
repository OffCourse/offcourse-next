import system from "system-components";

const LabelWrapper = system(
  {
    is: "label",
    size: "1rem",
    display: "none",
    bg: "white",
    color: "black",
    hover: {
      color: "black"
    }
  },
  "space"
).extend`
  grid-area: checkbox;
  box-sizing: border-box;
`;

export default LabelWrapper;
