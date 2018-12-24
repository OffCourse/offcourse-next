import React from "react";
import { Text, Heading, Group, Icon, Button } from "@offcourse/atoms";
import { Loading } from "@offcourse/molecules";
import { CourseCard } from "@offcourse/organisms";
import PropTypes from "prop-types";
import { variants, sizes } from "@offcourse/constants";
import system from "system-components";

const { INFO } = variants;
const { LARGE, EXTRA_LARGE } = sizes;

import Loadable from "react-loadable";

const Markdown = Loadable({
  loader: () => import("markdown-to-jsx"),
  loading: Loading
});

const Temp = system({
  display: "flex",
  p: 8,
  flexDirection: "column"
});
const Grid = system({
  mt: 6,
  display: "grid",
  justifyItems: "start",
  alignItems: "start",
  gridColumnGap: "3rem",
  gridTemplateColumns: ["1fr", "1fr 2fr", "1fr 3fr"]
});

const course = {
  courseId: "abc",
  goal: "Learn This",
  curator: "Offcourse",
  courseUrl: "/yeehaa",
  profileUrl: `/curator/yeehaa`,
  checkpoints: [
    {
      checkpointId: "a",
      task: `Gentrify adipisicing fanny pack pabst, health goth excepteur ut sunt swag quo`,
      resourceUrl: "/"
    },
    {
      checkpointId: "b",
      task: "Do That",
      completed: true,
      resourceUrl: "/"
    },
    {
      checkpointId: "c",
      task: "Do More",
      resourceUrl: "/"
    }
  ],
  tags: ["tic", "tac", "toe"],
  description: `Gentrify adipisicing fanny pack pabst, health goth excepteur ut sunt swag qui plaid tumeric letterpress. Wolf gentrify live-edge 8-bit. Af ut thundercats locavore williamsburg, blue bottle man braid viral`
};

const AboutView = ({ introduction }) => {
  const { title, text } = introduction;
  return (
    <Temp>
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
            <Button variant={INFO} size={LARGE}>
              Start Learning!
            </Button>
          </Group>
        </Group>
        <Group
          display={["none", "none", "flex"]}
          p={8}
          flexDirection="row"
          justifyContent="flex-start"
          overflow="hidden scroll"
        >
          <div style={{ transform: "scale(0.9)" }}>
            <CourseCard course={course} />
          </div>
          <div style={{ margin: "0 1rem", transform: "scale(1.1)" }}>
            <CourseCard course={course} />
          </div>
          <div style={{ transform: "scale(0.9)" }}>
            <CourseCard course={course} />
          </div>
        </Group>
      </Grid>
    </Temp>
  );
};

AboutView.propTypes = {
  introduction: PropTypes.object
};

export default AboutView;
