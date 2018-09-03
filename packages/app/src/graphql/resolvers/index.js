import * as courseCard from "./courseCard";
import * as messages from "./messages";
import * as auth from "./auth";
import * as overlay from "./overlay";
import * as theme from "./theme";

const resolvers = {
  Query: {},
  Mutation: {
    ...courseCard,
    ...messages,
    ...auth,
    ...overlay,
    ...theme
  }
};

export default resolvers;
