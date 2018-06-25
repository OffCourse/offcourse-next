import { toggleSidebar } from "./sidebar";
import { signIn, signOut } from "./auth";
import { openOverlay, closeOverlay } from "./overlay";
import { selectTheme, switchTheme } from "./theme";

export default {
  Mutation: {
    signIn,
    signOut,
    toggleSidebar,
    openOverlay,
    closeOverlay,
    switchTheme,
    selectTheme
  }
};
