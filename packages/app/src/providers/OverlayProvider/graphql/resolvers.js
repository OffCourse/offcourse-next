const __typename = "Overlay";
import { overlay as defaults } from "./defaults";

const openOverlay = (_, { mode, courseId = null }, { cache, getCacheKey }) => {
  const overlay = { ...defaults, mode, courseId, isOpen: true };
  cache.writeData({ data: { overlay } });
  return overlay;
};

const switchOverlayMode = (_, { mode }, { cache, getCacheKey }) => {
  const overlay = { ...defaults, mode, isOpen: true };
  cache.writeData({ data: { overlay } });
  return overlay;
};

const closeOverlay = (_, variables, { cache, getCacheKey }) => {
  const mode = null;
  const overlay = { __typename, mode, isOpen: false };
  cache.writeData({ data: { overlay } });
  return overlay;
};

const Mutation = {
  openOverlay,
  switchOverlayMode,
  closeOverlay
};

export default { Mutation };
