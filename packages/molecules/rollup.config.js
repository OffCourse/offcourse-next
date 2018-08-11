import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import json from "rollup-plugin-json";

import pkg from "./package.json";

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs"
    },
    {
      file: pkg.module,
      format: "es"
    }
  ],
  external: [
    "stream",
    "styled-components",
    "@offcourse/atoms",
    "ramda",
    "react-copy-to-clipboard",
    "react-sidebar",
    "react-sortable-hoc",
    "voca"
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    json(),
    babel({
      exclude: ["node_modules/**", "../../node_modules/**"]
    }),
    resolve(),
    commonjs({
      namedExports: {
        "react-copy-to-clipboard": ["CopyToClipboard"]
      } // Default: undefined
    })
  ]
};
