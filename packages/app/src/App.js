import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { GraphQL, ErrorBoundary } from "./components";
import Main from "./Main";
import {
  LayoutContainer,
  OverlayContainer,
  ThemeContainer
} from "./containers";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <GraphQL>
        <ThemeContainer>
          <Router>
            <ErrorBoundary>
              <LayoutContainer />
              <Main />
            </ErrorBoundary>
          </Router>
        </ThemeContainer>
      </GraphQL>
    );
  }
}

export default hot(module)(App);
