import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "ramda";
import { Loading } from "@offcourse/molecules";
import { Group, Button } from "@offcourse/atoms";
import { variants, sizes } from "@offcourse/constants";
import { ContentLayout } from "../../layouts";
import DisplayCards from "./DisplayCards";

const { INFO } = variants;
const { LARGE, EXTRA_LARGE } = sizes;

const IntroductionView = ({ content, courses, handlers }) => {
  const { Content, Display } = ContentLayout;
  const { title, text } = content;
  const { goHome } = handlers;
  return (
    <ContentLayout>
      <Content title={title} text={text}>
        <Group mt={6} alignSelf="stretch">
          <Button onClick={goHome} variant={INFO} size={LARGE}>
            Start Learning!
          </Button>
        </Group>
      </Content>
      <Display>
        <DisplayCards courses={courses} handlers={handlers} />
      </Display>
    </ContentLayout>
  );
};

IntroductionView.propTypes = {
  content: PropTypes.object,
  handlers: PropTypes.object,
  courses: PropTypes.array
};

export default IntroductionView;
