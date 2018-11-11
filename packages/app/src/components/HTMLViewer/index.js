import React, { Component } from "react";
import { Heading } from "@offcourse/atoms";
import { Loading } from "@offcourse/molecules";
import PropTypes from "prop-types";
import { Code, Link, Text, Image } from "./elements";

import Loadable from "react-loadable";

import { sizes } from "@offcourse/constants";

const { SMALL } = sizes;

const SyntaxHighlighter = Loadable({
  loader: () => import("react-syntax-highlighter/prism-light"),
  loading: Loading
});

const Markdown = Loadable({
  loader: () => import("markdown-to-jsx"),
  loading: Loading
});

class HTMLViewer extends Component {
  static propTypes = {
    markdown: PropTypes.string.isRequired
  };

  async componentWillMount() {
    const {
      duotoneDark
    } = await import(/* webpackChunkName: "highlighters" */ "react-syntax-highlighter/styles/prism");
    this.theme = duotoneDark;
  }

  render() {
    const { markdown } = this.props;
    return (
      <Markdown
        options={{
          overrides: {
            h1: {
              props: { size: SMALL },
              component: Heading
            },
            pre: { component: null },
            code: {
              props: {
                style: this.theme,
                CodeTag: Code
              },
              component: SyntaxHighlighter
            },
            p: { component: Text },
            a: { component: Link },
            img: { component: Image }
          }
        }}
      >
        {markdown}
      </Markdown>
    );
  }
}

export default HTMLViewer;
