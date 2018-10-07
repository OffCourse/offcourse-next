import React from "react";
import { offcourse } from "@offcourse/themes";
import * as atoms from "@offcourse/atoms";
import * as molecules from "@offcourse/molecules";
// import * as organisms from "@offcourse/organisms";
import RoadmapPage from "./roadmapPage";

import widget from "./features/embeddable-widget.yaml";
import themeCard from "./features/themeable-card.yaml";
import search from "./features/courses-search.yaml";
import checkpoint from "./features/extended-checkpoint.yaml";

const baseUrl =
  "https://github.com/OffCourse/offcourse-next/tree/master/packages/atoms/src/";

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
    content: require(`./content/${collectionName}/${blockName}.md`)
  }));
};

const pages = [
  {
    path: "/",
    title: "General Introduction",
    content: require("./content/general-introduction.md")
  },
  {
    path: "/feature-roadmap",
    title: "Feature Roadmap",
    content: () => (
      <RoadmapPage items={[widget, themeCard, search, checkpoint]} />
    )
  },
  {
    path: "/guidelines",
    title: "Guidelines",
    pages: [
      {
        path: "/guidelines/general",
        title: "General Guidelines",
        content: require("./content/guidelines/general-guidelines.md")
      },
      {
        path: "/guidelines/community",
        title: "Community Guidelines",
        content: require("./content/guidelines/community-guidelines.md")
      },
      {
        path: "/guidelines/design",
        title: "Design Guidelines",
        content: require("./content/guidelines/design-guidelines.md")
      },
      {
        path: "/guidelines/contribution",
        title: "Contribution Guidelines",
        content: require("./content/guidelines/contribution-guidelines.md")
      }
    ]
  },
  {
    path: "/visual-identity",
    title: "Visual Identity",
    imports: {
      ...offcourse.colors,
      grayScale: offcourse.namedGrayScale
    },
    content: require("./content/visual-identity.md")
  },
  {
    title: "Atoms",
    pages: createPages({
      name: "atoms",
      blocks: atoms
    })
  },
  {
    title: "Molecules",
    pages: createPages({
      name: "molecules",
      blocks: molecules
    })
  },
  // {
  //   title: "Organisms",
  //   pages: createPages({
  //     name: "organisms",
  //     blocks: organisms
  //   })
  // },
  {
    path: "/contact",
    title: "Contact",
    content: require("./content/contact.md")
  }
];

export default pages;
