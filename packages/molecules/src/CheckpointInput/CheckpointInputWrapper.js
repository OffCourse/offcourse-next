import system from "system-components";

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
).extend`
  .inputs {
    flex: 50;
  }
  .handles {
    flex: 1;
  }
`;

export default CheckpointSectionWrapper;
