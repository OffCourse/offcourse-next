import system from "system-components";
import styled from "styled-components";

const CheckpointSectionWrapper = system(
  {
    display: "flex",
    bg: "grayScale.1",
    border: 0,
    mb: 3,
    borderColor: "negative"
  },
  props => ({
    fontFamily: props.theme.fonts.bold,
    boxSizing: "border-box"
  })
);
export default styled(CheckpointSectionWrapper)`
  .inputs {
    flex: 50;
  }
  .handles {
    flex: 1;
  }
`;
