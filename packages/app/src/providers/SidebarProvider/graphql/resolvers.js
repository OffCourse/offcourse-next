import * as queries from "./queries";

const toggleSidebar = (_, __, { cache, ___ }) => {
  const previous = cache.readQuery({ query: queries.sidebar });
  const { __typename, isOpen } = previous.sidebar;
  const data = { sidebar: { __typename, isOpen: !isOpen } };
  cache.writeData({ data });
  return null;
};

const closeSidebar = (_, __, { cache, ___ }) => {
  const data = { sidebar: { __typename: "Sidebar", isOpen: false } };
  cache.writeData({ data });
  return null;
};

const Mutation = {
  toggleSidebar,
  closeSidebar
};

export default { Mutation };
