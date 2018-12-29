import React from "react";
import { Text, Heading, Group, Icon } from "@offcourse/atoms";
import { isEmpty } from "ramda";
import { IconGroup, Loading } from "@offcourse/molecules";
import DisplayCards from "../IntroductionView/DisplayCards";
import PropTypes from "prop-types";
import { sizes } from "@offcourse/constants";
import { ContentLayout } from "../../layouts";

const { LARGE, EXTRA_LARGE } = sizes;

import Loadable from "react-loadable";

const Markdown = Loadable({
  loader: () => import("markdown-to-jsx"),
  loading: Loading
});

const AboutView = ({ content, courses, handlers }) => {
  const { Content, Display } = ContentLayout;
  const { title, text, address } = content;
  const { goHome } = handlers;
  return (
    <ContentLayout>
      <Content title={title} text={text} goHome={goHome}>
        <Group flex="none" mb={6}>
          <Text size={LARGE}>{address.name}</Text>
          <Text size={LARGE}>{`${address.street} ${address.houseNumber}`}</Text>
          <Text size={LARGE}>{`${address.zipCode} ${address.city}`}</Text>
        </Group>
        <Group flex="none">
          <IconGroup>
            <Icon size={EXTRA_LARGE} name="email" />
            <Icon size={EXTRA_LARGE} mx={4} name="twitter" />
            <Icon size={EXTRA_LARGE} name="medium" />
          </IconGroup>
        </Group>
      </Content>
      <Display>
        {isEmpty(courses) ? (
          <Loading size={EXTRA_LARGE} />
        ) : (
          <DisplayCards courses={courses} handlers={handlers} />
        )}
      </Display>
    </ContentLayout>
  );
};

AboutView.propTypes = {
  content: PropTypes.object
};

export default AboutView;
