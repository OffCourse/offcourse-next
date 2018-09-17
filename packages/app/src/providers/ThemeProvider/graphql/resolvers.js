import * as queries from "./queries";
const __typename = "Theme";

const switchTheme = (_, variables, { cache, getCacheKey }) => {
  const previous = cache.readQuery({ query: queries.theme });
  const { current } = previous.theme;
  const nextTheme = current === "offcourse" ? "philosopher" : "oswald";
  const data = { theme: { __typename, current: nextTheme } };
  cache.writeData({ data });
  return null;
};

const selectTheme = (_, { themeName }, { cache, getCacheKey }) => {
  const theme = { __typename, current: themeName };
  cache.writeData({ data: { theme } });
  return theme;
};

const Mutation = {
  switchTheme,
  selectTheme
};

export default { Mutation };
