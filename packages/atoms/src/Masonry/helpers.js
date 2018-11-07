import {
  append,
  adjust,
  repeat,
  memoizeWith,
  reduce,
  identity,
  addIndex,
  reduceWhile,
  inc
} from "ramda";

const reduceIndexed = addIndex(reduce);

const _prepareGrid = (items, numberOfColumns) => {
  return reduceIndexed(
    (acc, child, index) => adjust(append(child), index % numberOfColumns, acc),
    repeat([], numberOfColumns),
    items
  );
};

const indexGrid = (items, numberOfColumns) => {
  return `${numberOfColumns}-${items.length}`;
};

const prepareGrid = memoizeWith(indexGrid, _prepareGrid);

const _getColumns = (containerWidth, breakpoints) => {
  return reduceWhile(
    (_, breakpoint) => breakpoint < containerWidth,
    inc,
    1,
    breakpoints
  );
};

const getColumns = memoizeWith(identity, _getColumns);

export { getColumns, prepareGrid };
