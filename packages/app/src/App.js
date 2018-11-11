import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { GraphQL, ErrorBoundary } from "./components";
import Main from "./Main";
import { Portal, Backdrop, Fade } from "@offcourse/atoms";
import { ThemeContainer } from "./containers";
import { BrowserRouter as Router } from "react-router-dom";
import { TotalPanicView } from "./views";

class App extends Component {
  state = { isOpen: true };
  render() {
    const { isOpen } = this.state;
    const toggle = () => this.setState({ isOpen: !isOpen });
    return (
      <GraphQL>
        <ThemeContainer>
          <Router>
            <ErrorBoundary componentToRender={TotalPanicView}>
              <Main />
              <Portal rootEl="backdrop">
                <Fade
                  minOpacity={0}
                  maxOpacity={0.7}
                  pose={isOpen ? "visible" : "hidden"}
                >
                  <Backdrop
                    isVisible={isOpen}
                    display="block"
                    onClick={toggle}
                  />
                </Fade>
              </Portal>
            </ErrorBoundary>
          </Router>
        </ThemeContainer>
      </GraphQL>
    );
  }
}

export default hot(module)(App);
