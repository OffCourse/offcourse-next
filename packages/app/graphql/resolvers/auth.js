import cognito from "../../Cognito";
import { queries, mutations } from "..";
import { auth as defaults } from "../defaults";

import { authModes } from "@offcourse/constants";

const { RESETTING_PASSWORD, SIGNING_UP, SIGNED_IN, SIGNED_OUT } = authModes;

const initAuth = async (_, __, { cache }) => {
  try {
    const { userName } = await cognito.currentUser();
    const auth = {
      ...defaults,
      authStatus: userName ? SIGNED_IN : SIGNED_OUT,
      userName
    };
    cache.writeData({ data: { auth } });
    return auth;
  } catch (error) {
    const auth = {
      ...defaults,
      errors: { ...defaults.errors, ...error }
    };
    cache.writeData({ data: { auth } });
    return auth;
  }
};

const signUp = async (_, { userName, password, email }, { cache }) => {
  try {
    await cognito.signUp({ userName, password, email });
    const auth = {
      ...defaults,
      userName,
      password,
      email,
      authStatus: SIGNING_UP,
      needsConfirmation: true
    };
    cache.writeData({ data: { auth } });
    return auth;
  } catch (error) {
    const auth = {
      ...defaults,
      authStatus: SIGNING_UP,
      errors: { ...defaults.errors, ...error }
    };
    cache.writeData({ data: { auth } });
    return auth;
  }
};

const confirmSignUp = async (_, variables, { cache }) => {
  const previous = cache.readQuery({ query: queries.auth });
  const { userName, email, password } = previous.auth;
  try {
    await cognito.confirmSignUp(variables);
    await cognito.signIn({ userName, password });
    const auth = {
      ...defaults,
      authStatus: SIGNED_IN,
      userName
    };
    cache.writeData({ data: { auth } });
    return auth;
  } catch (error) {
    const auth = {
      ...defaults,
      userName,
      email,
      password,
      authStatus: SIGNING_UP,
      needsConfirmation: true,
      errors: { ...defaults.errors, ...error }
    };
    cache.writeData({ data: { auth } });
    return auth;
  }
};

const resetPassword = async (_, { userName }, { cache }) => {
  try {
    await cognito.resetPassword({ userName });
    const auth = {
      ...defaults,
      userName,
      authStatus: RESETTING_PASSWORD,
      needsConfirmation: true
    };
    cache.writeData({ data: { auth } });
    return auth;
  } catch (error) {
    const auth = {
      ...defaults,
      authStatus: RESETTING_PASSWORD,
      errors: { ...defaults.errors, ...error }
    };
    cache.writeData({ data: { auth } });
    return auth;
  }
};

const confirmNewPassword = async (_, variables, { cache }) => {
  try {
    await cognito.confirmNewPassword(variables);
    const { userName } = await cognito.signIn(variables);
    const auth = {
      ...defaults,
      userName,
      authStatus: SIGNED_IN
    };
    cache.writeData({ data: { auth } });
    return auth;
  } catch (error) {
    const auth = {
      ...defaults,
      authStatus: RESETTING_PASSWORD,
      needsConfirmation: true,
      errors: { ...defaults.errors, ...error }
    };
    cache.writeData({ data: { auth } });
    return auth;
  }
};

const signIn = async (_, variables, { cache }) => {
  try {
    const { userName } = await cognito.signIn(variables);
    const auth = {
      ...defaults,
      userName,
      authStatus: SIGNED_IN,
      userName
    };
    cache.writeData({ data: { auth } });
    return auth;
  } catch (error) {
    const auth = {
      ...defaults,
      errors: { ...defaults.errors, ...error }
    };
    cache.writeData({ data: { auth } });
    return auth;
  }
};

const signOut = async (_, __, { cache }) => {
  const auth = defaults;
  await cognito.signOut();
  cache.writeData({ data: { auth } });
  return auth;
};

export {
  initAuth,
  signIn,
  signOut,
  signUp,
  confirmSignUp,
  resetPassword,
  confirmNewPassword
};
