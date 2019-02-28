import React from "react";
import { hot } from "react-hot-loader";
import { GraphQL, ErrorBoundary } from "./components";
import Main from "./Main";
import { ThemeContainer } from "./containers";
import { BrowserRouter as Router } from "react-router-dom";
import { TotalPanicView } from "./views";
import { AppStateProvider } from "./providers";

const App = () => {
  return (
    <GraphQL>
      <ThemeContainer>
        <Router>
          <AppStateProvider>
            <ErrorBoundary componentToRender={TotalPanicView}>
              <Main />
            </ErrorBoundary>
          </AppStateProvider>
        </Router>
      </ThemeContainer>
    </GraphQL>
  );
};

export default hot(module)(App);
