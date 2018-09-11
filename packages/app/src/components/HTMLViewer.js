import React, { Component } from "react";
import { Heading, Link } from "@offcourse/atoms";
import PropTypes from "prop-types";
import Markdown from "markdown-to-jsx";
import system from "system-components";

const Image = system({
  is: "img",
  maxWidth: "100%",
  maxHeight: "100%"
});

const Text = system({ is: "p", lineHeight: 3, fontSize: 2, py: "0.25rem" });

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
              props: { size: "small", component: Heading }
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
