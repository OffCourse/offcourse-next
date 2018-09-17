import titleCase from "voca/title_case";
import lowerCase from "voca/lower_case";
import { compose, filter, identity } from "ramda";

const formatTitle = compose(
  titleCase,
  lowerCase
);
const compact = filter(identity);

export { compact };
