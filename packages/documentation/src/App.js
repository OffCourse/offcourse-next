import React, { Component } from "react";
import { Catalog } from "catalog";
import { offcourse } from "@offcourse/themes";
import pages from "./pages";

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
        title="Blocks"
        theme={catalogTheme}
        useBrowserHistory={true}
        pages={pages}
      />
    );
  }
}

export default App;
