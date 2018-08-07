import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { Layout } from "./components";
import { CollectionView, CourseView } from "./views";
import { GraphQLProvider } from "./providers";
import { ThemeContainer } from "./containers";
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

const About = () => <div>About Us</div>

class App extends Component {
    render() {
        return (
            <GraphQLProvider>
                <ThemeContainer>
                    <Router>
                        <Layout>
                            <CollectionView />
                            <CourseView />
                            <Route path="/about" component={About} />
                        </Layout>
                    </Router>
                </ThemeContainer>
            </GraphQLProvider >
        )
    }
}

export default hot(module)(App)
