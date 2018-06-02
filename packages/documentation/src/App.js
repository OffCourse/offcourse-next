import React, { Component } from "react";
import * as atoms from "atoms";
import { Catalog, pageLoader } from "catalog";
import { offcourse } from "./themes";

const createPages = ({ name: collectionName, blocks, helpers }) => {
  const pageNames = Object.keys(blocks);
  return pageNames.map(blockName => ({
    imports: { ...blocks, ...helpers },
    path: `/${collectionName}/${blockName}`,
    title: `${blockName}`,
    content: pageLoader(`${collectionName}/${blockName}.md`)
  }));
};

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
        pages={[
          {
            path: "/",
            title: "Introduction",
            content: pageLoader("introduction.md")
          },
          {
            title: "Base Styles",
            pages: [
              {
                imports: {
                  ...offcourse.colors,
                  grayScale: offcourse.namedGrayScale
                },
                path: "base_styles/colors",
                title: "Colors",
                content: pageLoader("/basics/colors.md")
              },
              {
                path: "/base_styles/typography",
                title: "Typography",
                content: pageLoader("/basics/typography.md")
              }
            ]
          },
          {
            title: "Atoms",
            pages: createPages({
              name: "atoms",
              blocks: atoms
            })
          }
        ]}
      />
    );
  }
}

export default App;
