import cognito from "../../Cognito";
import { auth as defaults } from "../defaults";

import { authModes } from "../../constants";

const { SIGNED_IN, SIGNED_OUT } = authModes;

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

const signIn = async (_, variables, { cache }) => {
  try {
    const { userName } = await cognito.signIn(variables);
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

export { initAuth, signIn, signOut };
