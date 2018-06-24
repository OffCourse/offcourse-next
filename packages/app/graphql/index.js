import * as queries from "./queries";
import * as mutations from "./mutations";
import * as themes from "@offcourse/themes";
import resolvers from "./resolvers";

const defaults = {
  sidebar: {
    __typename: "Sidebar",
    isOpen: false
  },
  overlay: {
    __typename: "Overlay",
    isOpen: false
  },
  theme: {
    __typename: "Theme",
    all: Object.keys(themes),
    current: "offcourse"
  }
};

const typeDefs = `
  type Sidebar {
    isOpen: Boolean!
  }

  type Overlay {
    isOpen: Boolean!
  }

  type Theme {
    all: [String!]
    current: String!
  }

  type Mutation {
    toggleSidebar: Sidebar
    closeOverlay: Overlay
    openOverlay: Overlay
    switchTheme: Theme
  }

  type Query {
    sidebar: Sidebar
    overlay: Overlay
    theme: Theme
  }
`;

export { defaults, queries, mutations, resolvers, typeDefs };
