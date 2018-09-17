import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { ThemeProvider, injectGlobal } from "styled-components";
import { offcourse as theme } from "@offcourse/themes";
import App from "./App";

injectGlobal(theme);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
