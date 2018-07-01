import cognito from "../../Cognito";
import { auth as defaults } from "../defaults";

import { authModes } from "../../constants";

const { SIGNED_IN, SIGNED_OUT } = authModes;

const signIn = async (_, variables, { cache }) => {
  try {
    const auth = {
      ...defaults,
      authStatus: SIGNED_IN,
      ...(await cognito.signIn(variables))
    };
    const response = cache.writeData({
      data: { auth }
    });
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
  await cache.writeData({ data: { auth } });
  return auth;
};

export { signIn, signOut };
