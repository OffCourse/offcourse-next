const __typename = "Auth";

const signIn = async (_, { userName }, { cache, getCacheKey }) => {
  const auth = { __typename, userName };
  await cache.writeData({ data: { auth } });
  return auth;
};

const signOut = async (_, variables, { cache, getCacheKey }) => {
  const userName = null;
  const auth = { __typename, userName };
  await cache.writeData({ data: { auth } });
  return auth;
};

export { signIn, signOut };
