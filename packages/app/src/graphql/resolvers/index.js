import * as courseCard from "./courseCard";
import * as messages from "./messages";
import * as auth from "./auth";
import * as overlay from "./overlay";

const resolvers = {
  Query: {},
  Mutation: {
    ...courseCard,
    ...messages,
    ...auth,
    ...overlay
  }
};

export default resolvers;
