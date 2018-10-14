import titleCase from "voca/title_case";
import lowerCase from "voca/lower_case";
import { map, compose, filter, identity } from "ramda";

const titleize = str => titleCase(str, ["'", "-", "’"]);

const formatTitle = compose(
  titleize,
  lowerCase
);

const compact = filter(identity);

export { compose, map, filter, compact, lowerCase, formatTitle };
