import system from "system-components";

const SectionWrapper = system(
  {
    is: "section",
    pt: 6,
    pb: 6,
    pl: 6,
    pr: 6,
    borderBottom: 1,
    borderColor: "grayScale.1"
  },
  "alignItems",
  "justifyContent",
  "flexDirection",
  "display",
  "color"
);

export default SectionWrapper;
