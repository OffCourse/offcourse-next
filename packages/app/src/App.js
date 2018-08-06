import React from 'react';
import { hot } from 'react-hot-loader';
import { ApolloProvider } from "react-apollo";
import { ApolloClient, HttpLink, InMemoryCache, defaultDataIdFromObject } from "apollo-boost";
import { setContext } from "apollo-link-context";
import { from } from "apollo-link";
import { withClientState } from "apollo-link-state";
import { Layout } from "./components";
import { CoursesContainer } from "./containers";
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import * as initData from "../graphql";

// this should not be here...
import cognito from "../Cognito";

const httpLink = new HttpLink({
    uri: "https://api.offcourse.io/graphql"
});

const authMiddleware = setContext(async () => {
    let authorization = "GUEST";
    if (process.browser) {
        const { accessToken } = await cognito.currentUser();
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

const cache = new InMemoryCache({
    dataIdFromObject: object => {
        switch (object.__typename) {
            case "Course":
                return object.courseId;
            default:
                return defaultDataIdFromObject(object); // fall back to default handling
        }
    }
});

const stateLink = withClientState({ cache, ...initData });

const client = new ApolloClient({
    connectToDevTools: process.browser,
    link: from([authMiddleware, stateLink, httpLink]),
    cache: cache
});

const About = () => <div>About Us</div>

const App = () => (
    <ApolloProvider client={client}>
        <Router>
            <Layout>
                <Route exact path="/" component={CoursesContainer} />
                <Route path="/about" render={(props) => {

                    console.log(props);
                    return <div>{
                        JSON.stringify(props, null, 2)
                    }</div>
                }
                } />
            </Layout>
        </Router>
    </ApolloProvider>
);

export default hot(module)(App)
