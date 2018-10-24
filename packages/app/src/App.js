import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { GraphQL, ErrorBoundary } from "./components";
import {
  LayoutContainer,
  OverlayContainer,
  ThemeContainer
} from "./containers";
import { BrowserRouter as Router } from "react-router-dom";
import { AboutView, CourseView, CollectionView, CheckpointView } from "./views";

class App extends Component {
  render() {
    return (
      <GraphQL>
        <ThemeContainer>
          <Router>
            <ErrorBoundary>
              <LayoutContainer />
              <OverlayContainer />
              <div
                style={{
                  zIndex: -1,
                  display: "flex",
                  position: "fixed",
                  background: "#f4f6f4",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  marginTop: "2.25rem"
                }}
              >
                <CollectionView />
                <CourseView />
                <CheckpointView />
                <AboutView />
              </div>
            </ErrorBoundary>
          </Router>
        </ThemeContainer>
      </GraphQL>
    );
  }
}

export default hot(module)(App);
