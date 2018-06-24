import { queries } from "..";

const toggleSidebar = (_, variables, { cache, getCacheKey }) => {
  const previous = cache.readQuery({ query: queries.sidebar });
  const { __typename, isOpen } = previous.sidebar;
  const data = { sidebar: { __typename, isOpen: !isOpen } };
  cache.writeData({ data });
  return null;
};

export { toggleSidebar };
