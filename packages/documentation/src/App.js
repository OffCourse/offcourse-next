import React, { Component, Fragment } from "react";
import { offcourse as theme } from "@offcourse/themes";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Catalog } from "catalog";
import pages from "./pages";

const GlobalStyle = createGlobalStyle(theme);

const { fonts, grayScale } = theme;

const catalogTheme = {
  fontFamily: fonts.base,
  fontHeading: fonts.bold,
  fontMono: fonts.accents,
  pageHeadingBackground: grayScale[3]
};

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Catalog
            title="Blocks"
            theme={catalogTheme}
            useBrowserHistory={true}
            pages={pages}
          />
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default App;
