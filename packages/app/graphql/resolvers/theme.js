import { queries } from "..";
const __typename = "Theme";

const switchTheme = (_, variables, { cache, getCacheKey }) => {
  const previous = cache.readQuery({ query: queries.appState });
  const { __typename, current } = previous.theme;
  const nextTheme = current === "offcourse" ? "philosopher" : "oswald";
  const data = { theme: { __typename, current: nextTheme } };
  cache.writeData({ data });
  return null;
};

export { switchTheme };
