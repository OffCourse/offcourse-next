import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { GraphQL, ErrorBoundary } from "./components";
import Main from "./Main";
import { ThemeContainer } from "./containers";
import { BrowserRouter as Router } from "react-router-dom";
import { TotalPanicView } from "./views";

class App extends Component {
  render() {
    return (
      <GraphQL>
        <ThemeContainer>
          <Router>
            <ErrorBoundary componentToRender={TotalPanicView}>
              <Main />
            </ErrorBoundary>
          </Router>
        </ThemeContainer>
      </GraphQL>
    );
  }
}

export default hot(module)(App);
