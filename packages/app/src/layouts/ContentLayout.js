import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loadable from "react-loadable";
import { Text, Heading, Group } from "@offcourse/atoms";
import { Loading } from "@offcourse/molecules";
import { sizes } from "@offcourse/constants";

const { LARGE, EXTRA_LARGE } = sizes;

const ContentLayout = styled("div")`
  flex: 1;
  margin: 1rem;
  height: calc(100vh -2.25rem);
  max-width: 1800px;
  display: grid;
  justify-items: center;
  align-items: center;

  @media screen and (min-width: 800px) {
    height: 80vh;
    margin: 4rem;
    grid-column-gap: 3rem;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1600px) {
    height: 80vh;
    margin: 4rem;
    grid-column-gap: 3rem;
    grid-template-columns: 1fr 3fr;
  }
`;

const Markdown = Loadable({
  loader: () => import("markdown-to-jsx"),
  loading: Loading
});

const Content = ({ title, text, children }) => {
  return (
    <Group p={8} justifyContent="flex-start" overflow="hidden scroll">
      <Heading mt={8} mb={6} size={EXTRA_LARGE}>
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

Content.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node
};

const Display = ({ children }) => children;

ContentLayout.Content = Content;
ContentLayout.Display = Display;

export default ContentLayout;
