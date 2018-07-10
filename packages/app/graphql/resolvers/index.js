import { toggleSidebar } from "./sidebar";
import {
  initAuth,
  signIn,
  signOut,
  signUp,
  confirmSignUp,
  resetPassword,
  confirmNewPassword
} from "./auth";
import { openOverlay, closeOverlay, switchOverlayMode } from "./overlay";
import { selectTheme, switchTheme } from "./theme";

export default {
  Mutation: {
    initAuth,
    signIn,
    signOut,
    signUp,
    confirmSignUp,
    resetPassword,
    confirmNewPassword,
    toggleSidebar,
    openOverlay,
    closeOverlay,
    switchOverlayMode,
    switchTheme,
    selectTheme
  }
};
