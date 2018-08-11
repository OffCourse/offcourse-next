import React, { Component, Fragment } from "react";
import { hot } from "react-hot-loader";
import { Layout } from "./components";
import { GraphQLProvider } from "./providers";
import { ThemeContainer, AuthContainer } from "./containers";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loadable from "react-loadable";

const About = () => <div>About Us</div>;

const CourseView = Loadable({
  loader: () => import("./views/CourseView"),
  loading: About
});

const CollectionView = Loadable({
  loader: () => import("./views/CollectionView"),
  loading: About
});

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
      </GraphQLProvider>
    );
  }
}

export default hot(module)(App);
