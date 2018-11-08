import system from "system-components";

const SectionWrapper = system(
  {
    is: "section",
    display: "flex",
    p: 6,
    borderBottom: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    borderColor: "grayScale.1"
  },
  "color"
);

export default SectionWrapper;
