import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { GraphQLProvider } from "./providers";
import { LayoutContainer, ThemeContainer } from "./containers";
import { BrowserRouter as Router } from "react-router-dom";
import { CourseView, CollectionView } from "./views";

class App extends Component {
  render() {
    return (
      <GraphQLProvider>
        <ThemeContainer>
          <Router>
            <LayoutContainer>
              <CollectionView />
              <CourseView />
            </LayoutContainer>
          </Router>
        </ThemeContainer>
      </GraphQLProvider>
    );
  }
}

export default hot(module)(App);
