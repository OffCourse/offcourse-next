import { authModes } from "@offcourse/constants";

const { SIGNED_OUT } = authModes;

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
