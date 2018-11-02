import React, { Component } from "react";
import { Text, Heading, Group, Loading, Icon } from "@offcourse/atoms";
import { IconGroup } from "@offcourse/molecules";
import PropTypes from "prop-types";
import { sizes } from "@offcourse/constants";

const { SMALL, NORMAL, LARGE, EXTRA_LARGE } = sizes;

import Loadable from "react-loadable";

const Markdown = Loadable({
  loader: () => import("markdown-to-jsx"),
  loading: Loading
});

const Paragraph = ({ children }) => {
  return (
    <Group mb={7}>
      <Text size={LARGE}>{children}</Text>
    </Group>
  );
};

export default class AboutView extends Component {
  static propTypes = {
    about: PropTypes.object,
    handlers: PropTypes.object
  };

  render() {
    const { title, text, address } = this.props.about;
    return (
      <Group justifyContent="center" alignItems="center">
        <Group
          p={8}
          justifyContent={["flex-start", "center", "center"]}
          overflow="hidden scroll"
          maxWidth="50rem"
        >
          <Heading size={EXTRA_LARGE}>{title}</Heading>
          <Markdown
            options={{
              overrides: {
                p: { component: Paragraph },
                a: { component: "a", props: { style: { color: "black" } } }
              }
            }}
          >
            {text}
          </Markdown>
          <Group flex="none" mb={6}>
            <Text size={LARGE}>{address.name}</Text>
            <Text size={LARGE}>{`${address.street} ${
              address.houseNumber
            }`}</Text>
            <Text size={LARGE}>{`${address.zipCode} ${address.city}`}</Text>
          </Group>
          <Group flex="none">
            <IconGroup>
              <Icon size={EXTRA_LARGE} name="email" />
              <Icon size={EXTRA_LARGE} mx={4} name="twitter" />
              <Icon size={EXTRA_LARGE} name="medium" />
            </IconGroup>
          </Group>
        </Group>
      </Group>
    );
  }
}
