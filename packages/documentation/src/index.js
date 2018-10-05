import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { offcourse as theme } from "@offcourse/themes";
import App from "./App";

const GlobalStyle = createGlobalStyle(theme);

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Fragment>,
  document.getElementById("root")
);
registerServiceWorker();
