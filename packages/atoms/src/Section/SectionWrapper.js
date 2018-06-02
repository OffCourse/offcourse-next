import system from "system-components";

const SectionWrapper = system(
  {
    is: "section",
    px: 6,
    py: 6,
    borderBottom: 1,
    borderColor: "grayScale.1"
  },
  "alignItems",
  "justifyContent",
  "flexDirection",
  "display"
);

export default SectionWrapper;
