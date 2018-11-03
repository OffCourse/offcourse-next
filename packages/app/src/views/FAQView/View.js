import React from "react";
import PropTypes from "prop-types";
import { toPairs, groupBy, prop, map } from "ramda";
import { Heading, Group } from "@offcourse/atoms";
import { sizes } from "@offcourse/constants";
import Loadable from "react-loadable";
import system from "system-components";
import { Paragraph } from "../../components";

const { SMALL, LARGE } = sizes;

const Temp = system({
  display: "flex",
  p: 8,
  flexDirection: "column",
  maxWidth: "65rem"
});
const Grid = system({
  mt: 6,
  display: "grid",
  justifyItems: "start",
  alignItems: "start",
  gridColumnGap: "3rem",
  gridTemplateColumns: ["1fr", "1fr 1fr", "1fr 1fr"]
});

const Markdown = Loadable({
  loader: () => import("markdown-to-jsx"),
  loading: () => null
});

const Section = ({ data }) => {
  const [title, questions] = data;
  return (
    <Group mb={7} flex="none">
      <Group mb={7}>
        <Heading size={SMALL}>{title}</Heading>
      </Group>
      {map(
        ({ question, answer }) => (
          <Group flex="none" mb={6} key={question}>
            <Group mb={3}>
              <Heading size={SMALL}>{question}</Heading>
            </Group>
            <Markdown
              options={{
                overrides: {
                  p: { component: Paragraph },
                  a: {
                    component: "a",
                    props: { style: { color: "black" } }
                  }
                }
              }}
            >
              {answer}
            </Markdown>
          </Group>
        ),
        questions
      )}
    </Group>
  );
};

const FAQView = ({ faq }) => {
  const { title, questions } = faq;
  const sections = groupBy(prop("category"), questions);
  const sortedSections = toPairs(sections);
  const [platform, ...rest] = sortedSections;
  return (
    <Group
      flexDirection="row"
      justifyContent={["flex-start", "center", "center"]}
      overflow={["hidden scroll", "hidden scroll", "hidden scroll"]}
      alignItems={["flex-start", "flex-start", "flex-start"]}
    >
      <Temp>
        <Heading size={LARGE}>{title}</Heading>
        <Grid>
          <Group>
            <Section data={platform} />
          </Group>
          <Group>
            {map(data => {
              return <Section key={data[0]} data={data} />;
            }, rest)}
          </Group>
        </Grid>
      </Temp>
    </Group>
  );
};

FAQView.propTypes = {
  faq: PropTypes.object
};

export default FAQView;
