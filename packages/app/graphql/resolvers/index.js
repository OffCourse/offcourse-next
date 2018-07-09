import { toggleSidebar } from "./sidebar";
import { initAuth, signIn, signOut, resetPassword } from "./auth";
import { openOverlay, closeOverlay, switchOverlayMode } from "./overlay";
import { selectTheme, switchTheme } from "./theme";

export default {
  Mutation: {
    initAuth,
    signIn,
    signOut,
    resetPassword,
    toggleSidebar,
    openOverlay,
    closeOverlay,
    switchOverlayMode,
    switchTheme,
    selectTheme
  }
};
