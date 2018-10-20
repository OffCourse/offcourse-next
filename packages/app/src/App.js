import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { GraphQL, ErrorBoundary } from "./components";
import { LayoutContainer, ThemeContainer } from "./containers";
import { BrowserRouter as Router } from "react-router-dom";
import { CourseView, CollectionView, CheckpointView } from "./views";

class App extends Component {
  render() {
    return (
      <GraphQL>
        <ThemeContainer>
          <Router>
            <LayoutContainer>
              <ErrorBoundary>
                <CollectionView />
                <CourseView />
                <CheckpointView />
              </ErrorBoundary>
            </LayoutContainer>
          </Router>
        </ThemeContainer>
      </GraphQL>
    );
  }
}

export default hot(module)(App);
