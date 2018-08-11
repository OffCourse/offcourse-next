import { prop, assoc, pick, uniq, map, mergeDeepWithKey } from "ramda";

const updateQuery = (previousResult, { fetchMoreResult }) => {
  const ml = map(pick(["node", "cursor"]));
  const updateList = (l, r) => {
    const typeName = map(prop("__typename"), l)[0];
    return uniq(map(assoc("__typename", typeName), [...ml(l), ...ml(r)]));
  };
  const concatValues = (k, l, r) => {
    return k == "edges" ? updateList(l, r) : r;
  };
  return mergeDeepWithKey(concatValues, previousResult, fetchMoreResult);
};

export { updateQuery };
