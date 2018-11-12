import system from "system-components";

const SectionWrapper = system(
  {
    is: "section",
    display: "flex",
    px: 6,
    py: 6,
    borderBottom: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "grayScale.1"
  },
  "color"
);

export default SectionWrapper;
