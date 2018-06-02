import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { ThemeProvider } from "styled-components";
import { offcourse } from "./themes";

ReactDOM.render(
  <ThemeProvider theme={offcourse}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
