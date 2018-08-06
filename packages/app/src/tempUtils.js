import { prop, assoc, pick, uniq, identity, map, mergeDeepWithKey } from "ramda";
// import Router from "next/router";

const Router = { push: identity };

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

const goToCollection = query => {
  const href = {
    pathname: "/",
    query
  };
  const { tag, curator } = query;
  const as = tag ? `/tag/${tag}` : `/curator/${curator}`;
  Router.push(href, as);
};

const goHome = () => {
  Router.push("/");
};

const goToCourse = query => {
  const { goal, curator } = query;
  const href = {
    pathname: "/course",
    query
  };
  const as = `/curator/${curator}/${goal}`;
  Router.push(href, as);
};

export { updateQuery, goHome, goToCollection, goToCourse };
