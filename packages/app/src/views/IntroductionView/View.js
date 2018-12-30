import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Group, Button } from "@offcourse/atoms";
import { variants, sizes } from "@offcourse/constants";
import { SiteContent, Grid } from "../../components";
import DisplayCards from "./DisplayCards";

const { INFO } = variants;
const { LARGE } = sizes;

const IntroductionViewWrapper = styled(Grid)`
  @media screen and (min-width: 800px) {
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

const IntroductionView = ({ content, courses, handlers }) => {
  const { title, text } = content;
  const { goHome } = handlers;
  return (
    <IntroductionViewWrapper>
      <SiteContent title={title} text={text}>
        <Group mt={6} alignSelf="stretch">
          <Button onClick={goHome} variant={INFO} size={LARGE}>
            Start Learning!
          </Button>
        </Group>
      </SiteContent>
      <DisplayCards courses={courses} handlers={handlers} />
    </IntroductionViewWrapper>
  );
};

IntroductionView.propTypes = {
  content: PropTypes.object,
  handlers: PropTypes.object,
  courses: PropTypes.array
};

export default IntroductionView;
