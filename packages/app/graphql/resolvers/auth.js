const __typename = "Auth";

const signIn = async (_, { userName }, { cache }) => {
  const auth = { __typename, userName };
  await cache.writeData({ data: { auth } });
  return auth;
};

const signOut = async (_, __, { cache }) => {
  const userName = null;
  const auth = { __typename, userName };
  await cache.writeData({ data: { auth } });
  return auth;
};

export { signIn, signOut };
