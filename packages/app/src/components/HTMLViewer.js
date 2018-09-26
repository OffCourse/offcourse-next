import React, { Component } from "react";
import { Heading } from "@offcourse/atoms";
import PropTypes from "prop-types";
import Markdown from "markdown-to-jsx";
import system from "system-components";
import SyntaxHighlighter from "react-syntax-highlighter/prism-light";
import { duotoneDark } from "react-syntax-highlighter/styles/prism";

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

  render() {
    const { markdown } = this.props;
    return (
      <Markdown
        options={{
          overrides: {
            h1: {
              props: { size: "small" },
              component: Heading
            },
            pre: { component: null },
            code: {
              props: {
                style: duotoneDark,
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
