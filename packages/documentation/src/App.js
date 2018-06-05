import React, { Component } from "react";
import pages from "./pages";
import { Catalog } from "catalog";
import { offcourse } from "./themes";

const { fonts, grayScale } = offcourse;

const catalogTheme = {
  fontFamily: fonts.base,
  fontHeading: fonts.bold,
  fontMono: fonts.accents,
  pageHeadingBackground: grayScale[3]
};

class App extends Component {
  render() {
    return (
      <Catalog
        title="Documentation"
        theme={catalogTheme}
        useBrowserHistory={true}
        pages={pages}
      />
    );
  }
}

export default App;
