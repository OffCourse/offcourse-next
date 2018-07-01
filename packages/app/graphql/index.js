import * as queries from "./queries";
import * as mutations from "./mutations";
import * as defaults from "./defaults";
import resolvers from "./resolvers";

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

  type AuthErrors {
    userName: String
    general: String
    confirmationCode: String
  }

  type Auth {
    authStatus: String!
    accessToken: String
    refreshToken: String
    needsConfirmation: Boolean,
    errors: AuthErrors,
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
