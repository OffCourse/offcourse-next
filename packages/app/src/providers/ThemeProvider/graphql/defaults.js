import * as themes from "@offcourse/themes";

const theme = {
  __typename: "Theme",
  all: Object.keys(themes),
  current: "offcourse"
};

export { theme };
