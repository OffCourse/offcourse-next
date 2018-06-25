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
    isOpen: false,
    mode: null
  },
  theme: {
    __typename: "Theme",
    all: Object.keys(themes),
    current: "offcourse"
  },
  auth: {
    __typename: "Auth",
    userName: null
  }
};

const typeDefs = `
  type Sidebar {
    isOpen: Boolean!
  }

  type Overlay {
    isOpen: Boolean!
    mode: String
  }

  type Theme {
    all: [String!]
    current: String!
  }

  type Auth {
    userName: String!
  }

  type Mutation {
    selectTheme(themeName: String!): Theme
    toggleSidebar: Sidebar
    closeOverlay: Overlay
    openOverlay(mode: String!): Overlay
    switchTheme: Theme
    signIn: Auth
    signOut: Auth
  }

  type Query {
    sidebar: Sidebar
    overlay: Overlay
    theme: Theme
  }
`;

export { defaults, queries, mutations, resolvers, typeDefs };
