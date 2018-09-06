import * as auth from "./auth";

const resolvers = {
  Query: {},
  Mutation: {
    ...auth
  }
};

export default resolvers;
