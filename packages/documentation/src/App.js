import React, { Component } from "react";
import * as atoms from "@offcourse/atoms";
import { Catalog, pageLoader } from "catalog";
import { offcourse } from "./themes";

const baseUrl = `https://github.com/OffCourse/offcourse-next/tree/master/packages/atoms/src/`;

const createPages = ({ name: collectionName, blocks, helpers }) => {
  const pageNames = Object.keys(blocks);
  return pageNames.map(blockName => ({
    imports: {
      ...blocks,
      ...helpers,
      meta: {
        blockName,
        collectionName,
        url: baseUrl + blockName
      }
    },
    path: `/${collectionName}/${blockName}`,
    title: `${blockName}`,
    content: pageLoader(`/${collectionName}/${blockName}.md`)
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
            title: "General Introduction",
            content: pageLoader("./general-introduction.md")
          },
          {
            path: "/brand-identity",
            title: "Brand Identity",
            imports: {
              ...offcourse.colors,
              grayScale: offcourse.namedGrayScale
            },
            content: pageLoader("./brand-identity.md")
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
