const __typename = "Overlay";

const openOverlay = (_, { mode, courseId = null }, { cache, getCacheKey }) => {
  const overlay = { __typename, mode, courseId, isOpen: true };
  cache.writeData({ data: { overlay } });
  return overlay;
};

const closeOverlay = (_, variables, { cache, getCacheKey }) => {
  const mode = null;
  const overlay = { __typename, mode, isOpen: false };
  cache.writeData({ data: { overlay } });
  return overlay;
};

export { openOverlay, closeOverlay };
