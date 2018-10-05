import system from "system-components";
import styled from "styled-components";

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
);
export default styled(LabelWrapper)`
  grid-area: checkbox;
  box-sizing: border-box;
`;
