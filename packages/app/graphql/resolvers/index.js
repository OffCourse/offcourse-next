import { toggleSidebar } from "./sidebar";
import { initAuth, signIn, signOut } from "./auth";
import { openOverlay, closeOverlay } from "./overlay";
import { selectTheme, switchTheme } from "./theme";

export default {
  Mutation: {
    initAuth,
    signIn,
    signOut,
    toggleSidebar,
    openOverlay,
    closeOverlay,
    switchTheme,
    selectTheme
  }
};
