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
    "ramda",
    "styled-system",
    "voca",
    "@fortawesome/fontawesome-svg-core",
    "@fortawesome/free-brands-svg-icons",
    "@fortawesome/free-solid-svg-icons",
    "@fortawesome/react-fontawesome"
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
