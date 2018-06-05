import { pageLoader } from "catalog";
import * as atoms from "@offcourse/atoms";
import * as molecules from "@offcourse/molecules";
import * as organisms from "@offcourse/organisms";
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

const pages = [
  {
    path: "/",
    title: "General Introduction",
    content: pageLoader("./general-introduction.md")
  },
  {
    path: "/feature-roadmap",
    title: "Feature Roadmap",
    pages: [
      {
        path: "/feature-roadmap/about",
        title: "About",
        content: pageLoader("/feature-roadmap/about.md")
      }
    ]
  },
  {
    path: "/how-to-contribute",
    title: "How To Contribute",
    content: pageLoader("./how-to-contribute.md")
  },
  {
    path: "/visual-identity",
    title: "Visual Identity",
    imports: {
      ...offcourse.colors,
      grayScale: offcourse.namedGrayScale
    },
    content: pageLoader("./visual-identity.md")
  },
  {
    path: "/guidelines",
    title: "Guidelines",
    pages: [
      {
        path: "./guidelines/design-guidelines",
        title: "Design",
        content: pageLoader("./design-guidelines.md")
      },
      {
        path: "./guidelines/community-guidelines",
        title: "Community",
        content: pageLoader("./community-guidelines.md")
      }
    ]
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
  {
    title: "Organisms",
    pages: createPages({
      name: "organisms",
      blocks: organisms
    })
  }
];

export default pages;
