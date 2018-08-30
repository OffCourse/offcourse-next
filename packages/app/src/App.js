import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { GraphQLProvider } from "./providers";
import { LayoutContainer, ThemeContainer } from "./containers";
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
            <LayoutContainer>
              <CollectionView />
              <CourseView />
              <Route path="/about" component={About} />
            </LayoutContainer>
          </Router>
        </ThemeContainer>
      </GraphQLProvider>
    );
  }
}

export default hot(module)(App);
