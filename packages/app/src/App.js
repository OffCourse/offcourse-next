import React from "react";
import { hot } from "react-hot-loader";
import { GraphQL, ErrorBoundary } from "./components";
import Main from "./Main";
import { ThemeContainer, GlobalEventsContainer } from "./containers";
import { BrowserRouter as Router } from "react-router-dom";
import { TotalPanicView } from "./views";

const App = () => {
  return (
    <GraphQL>
      <ThemeContainer>
        <Router>
          <ErrorBoundary componentToRender={TotalPanicView}>
            <GlobalEventsContainer />
            <Main />
          </ErrorBoundary>
        </Router>
      </ThemeContainer>
    </GraphQL>
  );
};

export default hot(module)(App);
