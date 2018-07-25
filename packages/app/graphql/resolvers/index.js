import { toggleSidebar } from "./sidebar";
import { addMessage, removeMessage } from "./messages";
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
  Query: {},
  Mutation: {
    addMessage,
    removeMessage,
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
