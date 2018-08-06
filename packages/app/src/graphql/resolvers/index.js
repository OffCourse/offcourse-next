import { toggleSidebar } from "./sidebar";
import { changeCardSize } from "./courseCard";
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
    changeCardSize,
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
