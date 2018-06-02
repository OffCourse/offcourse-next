import titleCase from "voca/title_case";
import lowerCase from "voca/lower_case";
import { map, compose, filter, identity, addIndex } from "ramda";

const formatTitle = compose(
  titleCase,
  lowerCase
);
const mapIndexed = addIndex(map);
const compact = filter(identity);

export { compose, map, filter, compact, lowerCase, formatTitle };
