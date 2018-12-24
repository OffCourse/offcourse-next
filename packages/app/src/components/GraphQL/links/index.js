import { setContext } from "apollo-link-context";
import { withClientState } from "apollo-link-state";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import initData from "../initData";
import cache from "../cache";
import { AuthProvider } from "../../../providers";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
          locations,
          null,
          2
        )}, Path: ${JSON.stringify(path, null, 2)}`
      )
    );
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({
  uri: "https://api.offcourse.io/graphql"
  // uri: "https://hc08s499q4.execute-api.us-east-1.amazonaws.com/v1/canary"
});

const authLink = setContext(async () => {
  let authorization = "GUEST";
  if (process.browser) {
    const { accessToken } = await AuthProvider.currentUser();
    if (accessToken) {
      authorization = `Bearer ${accessToken}`;
    }
  }
  return {
    headers: {
      authorization
    }
  };
});

const stateLink = withClientState({ cache, ...initData });

export { errorLink, authLink, stateLink, httpLink };
