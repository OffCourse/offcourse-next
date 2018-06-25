import { toggleSidebar } from "./sidebar";
import { signIn } from "./auth";
import { openOverlay, closeOverlay } from "./overlay";
import { selectTheme, switchTheme } from "./theme";

export default {
  Mutation: {
    signIn,
    toggleSidebar,
    openOverlay,
    closeOverlay,
    switchTheme,
    selectTheme
  }
};
