import React from "react";
import { map, isEmpty, addIndex } from "ramda";
import { Text, Heading, Group, Icon, Button } from "@offcourse/atoms";
import { Loading } from "@offcourse/molecules";
import { CourseCard } from "@offcourse/organisms";
import PropTypes from "prop-types";
import { variants, sizes } from "@offcourse/constants";
import system from "system-components";

const { INFO } = variants;
const { NORMAL, LARGE, EXTRA_LARGE } = sizes;
const mapIndexed = addIndex(map);

import Loadable from "react-loadable";

const Markdown = Loadable({
  loader: () => import("markdown-to-jsx"),
  loading: Loading
});

const Grid = system({
  m: 8,
  flex: 1,
  height: "calc(80vh)",
  display: "grid",
  justifyItems: "center",
  alignItems: "center",
  gridColumnGap: "3rem",
  gridTemplateColumns: ["1fr", "1fr 2fr", "1fr 3fr"]
});

const DisplayCard = ({ course, size }) => {
  const scale = size === LARGE ? 1.1 : 0.9;
  return (
    <div style={{ transform: `scale(${scale})` }}>
      <CourseCard course={course} />
    </div>
  );
};

const AboutView = ({ content, courses, handlers }) => {
  const { title, text } = content;
  const { goHome, goToCourse } = handlers;
  return (
    <Grid>
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
        <Group mt={6} alignSelf="stretch">
          <Button onClick={goHome} variant={INFO} size={LARGE}>
            Start Learning!
          </Button>
        </Group>
      </Group>
      <Grid
        gridColumnGap="1rem"
        gridTemplateColumns={["1fr", "1fr 2fr", "1fr 1fr 1fr"]}
      >
        {isEmpty(courses) ? (
          <Loading />
        ) : (
          mapIndexed((course, index) => {
            const size = index === 1 ? LARGE : NORMAL;
            return <DisplayCard size={size} key={index} course={course} />;
          }, courses)
        )}
      </Grid>
    </Grid>
  );
};

AboutView.propTypes = {
  content: PropTypes.object,
  courses: PropTypes.array
};

export default AboutView;
