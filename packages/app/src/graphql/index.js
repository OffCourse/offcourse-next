import * as queries from "./queries";
import * as mutations from "./mutations";
import * as defaults from "./defaults";
import resolvers from "./resolvers";
import { reduce, mergeDeepRight } from "ramda";
import * as sidebar from "../providers/SidebarProvider";
import * as theme from "../providers/ThemeProvider";

const typeDefs = `
  type Sidebar {
    isOpen: Boolean!
  }

  type Overlay {
    isOpen: Boolean!
    courseId: String
    mode: String
  }

  type CourseCard {
    initialLevel: Int!
    layout: [String]
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
    needsConfirmation: Boolean,
    password: String!
    email: String!
    errors: AuthErrors,
    userName: String!
  }

  type Message {
    variant: String!
    message: String!
  }

  type Mutation {
    selectTheme(themeName: String!): Theme
    changeCardSize: CourseCard
    toggleSidebar: Sidebar
    closeOverlay: Overlay
    openOverlay(mode: String!, courseId: String!): Overlay
    switchOverlayMode(mode: String!, userName: String): Overlay
    switchTheme: Theme
    initAuth: Auth
    signUp(userName: String!, email: String!, password: String!): Auth
    confirmSignup(userName: String!, password: String!, confirmationCode: Int!): Auth
    resetPassword(userName: String!): Auth
    confirmNewPassword(userName: String!, password: String!, confirmationCode: Int!): Auth
    signIn(userName: String!, password: String!): Auth
    signOut: Auth
  }

  type Query {
    auth: Auth
    courseCard: CourseCard
    sidebar: Sidebar
    messages: [Message]
    overlay: Overlay
    theme: Theme
  }
`;

const temp = {
  defaults,
  queries,
  mutations,
  resolvers,
  typeDefs
};

const components = [sidebar, theme, temp];

export default reduce(mergeDeepRight, {}, components);
