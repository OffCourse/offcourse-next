import titleCase from "voca/title_case";
import lowerCase from "voca/lower_case";
import {
  map,
  clone,
  contains,
  compose,
  curry,
  filter,
  flatten,
  identity,
  addIndex,
  mapObjIndexed,
  isEmpty,
  uniq,
  values
} from "ramda";
import { arrayMove } from "react-sortable-hoc";

const formatTitle = compose(
  titleCase,
  lowerCase
);
const mapIndexed = addIndex(map);
const compact = filter(identity);
const move = arrayMove;
const mapObject = mapObjIndexed;

export { compact };
