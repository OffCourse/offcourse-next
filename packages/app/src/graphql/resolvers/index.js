import * as courseCard from "./courseCard";
import * as messages from "./messages";
import * as auth from "./auth";

const resolvers = {
  Query: {},
  Mutation: {
    ...courseCard,
    ...messages,
    ...auth
  }
};

export default resolvers;
