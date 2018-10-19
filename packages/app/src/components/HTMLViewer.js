import React, { Component } from "react";
import { Heading, Loading } from "@offcourse/atoms";
import PropTypes from "prop-types";
import system from "system-components";

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

const Image = system({
  is: "img",
  maxWidth: "100%",
  maxHeight: "100%"
});

const Code = ({ children, style, ...rest }) => {
  return (
    <code
      style={{
        ...style,
        wordBreak: "break-word",
        whiteSpace: "normal"
      }}
      {...rest}
    >
      {children}
    </code>
  );
};

const Link = system({
  is: "a",
  color: "black"
});

const Text = system({ is: "p", lineHeight: 3, fontSize: 2 });

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
