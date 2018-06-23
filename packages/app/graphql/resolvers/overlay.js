const __typename = "Overlay";

const openOverlay = (_, variables, { cache, getCacheKey }) => {
  const data = { overlay: { __typename, isOpen: true } };
  cache.writeData({ data });
  return null;
};

const closeOverlay = (_, variables, { cache, getCacheKey }) => {
  const data = { overlay: { __typename, isOpen: false } };
  cache.writeData({ data });
  return null;
};

export { openOverlay, closeOverlay };
