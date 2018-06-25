const __typename = "Auth";

const signIn = async (_, variables, { cache, getCacheKey }) => {
  const auth = { __typename, userName: "yeehaa" };
  await cache.writeData({ data: { auth } });
  return auth;
};

export { signIn };
