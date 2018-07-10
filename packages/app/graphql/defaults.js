import * as themes from "@offcourse/themes";
import { authModes } from "@offcourse/constants";

const { SIGNED_OUT } = authModes;

export const sidebar = {
  __typename: "Sidebar",
  isOpen: false
};

export const overlay = {
  __typename: "Overlay",
  isOpen: false,
  courseId: null,
  mode: null
};

export const theme = {
  __typename: "Theme",
  all: Object.keys(themes),
  current: "offcourse"
};

export const authErrors = {
  __typename: "AuthErrors",
  userName: null,
  general: null,
  confirmationCode: null
};

export const auth = {
  __typename: "Auth",
  userName: null,
  email: null,
  password: null,
  authStatus: SIGNED_OUT,
  needsConfirmation: false,
  errors: authErrors
};
