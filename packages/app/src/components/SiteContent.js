import React from "react";
import { Text, Heading, Group } from "@offcourse/atoms";
import { Loading } from "@offcourse/molecules";
import PropTypes from "prop-types";
import { sizes } from "@offcourse/constants";

const { LARGE } = sizes;

import Loadable from "react-loadable";

const Markdown = Loadable({
  loader: () => import("markdown-to-jsx"),
  loading: Loading
});

const SiteContent = ({ title, text, children }) => {
  return (
    <Group
      p={8}
      justifyContent="flex-start"
      overflow="hidden scroll"
      maxWidth="50rem"
    >
      <Heading mt={8} mb={6} size={LARGE}>
        {title}
      </Heading>
      <Markdown
        options={{
          overrides: {
            p: { component: Text, props: { size: LARGE, mb: 7 } },
            a: { component: "a", props: { style: { color: "black" } } }
          }
        }}
      >
        {text}
      </Markdown>
      {children}
    </Group>
  );
};

SiteContent.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node
};

export default SiteContent;
