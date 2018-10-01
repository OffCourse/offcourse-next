import * as queries from "./queries";

const toggleSearchbar = (_, __, { cache, ___ }) => {
  const previous = cache.readQuery({ query: queries.searchbar });
  const { __typename, isOpen } = previous.searchbar;
  const data = { searchbar: { __typename, isOpen: !isOpen } };
  cache.writeData({ data });
  return null;
};

const closeSearchbar = (_, __, { cache, ___ }) => {
  const previous = cache.readQuery({ query: queries.searchbar });
  const { __typename, isOpen } = previous.searchbar;
  const data = { searchbar: { __typename, isOpen: false } };
  cache.writeData({ data });
  return null;
};
const Mutation = {
  toggleSearchbar,
  closeSearchbar
};

export default { Mutation };
