import system from "system-components";

const SectionWrapper = system(
  {
    is: "section",
    display: "flex",
    pt: 6,
    pb: 6,
    pl: 6,
    pr: 6,
    borderBottom: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    borderColor: "grayScale.1"
  },
  "color"
);

export default SectionWrapper;
