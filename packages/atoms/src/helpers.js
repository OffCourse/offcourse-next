import titleCase from "voca/title_case";
import lowerCase from "voca/lower_case";
import trimLeft from "voca/trim_left";
import { map, compose, filter, identity } from "ramda";

const titleize = str => titleCase(str, ["'", "-", "’"]);

const formatTitle = compose(
  trimLeft,
  titleize,
  lowerCase
);

const compact = filter(identity);

export { compose, map, filter, compact, lowerCase, formatTitle };
