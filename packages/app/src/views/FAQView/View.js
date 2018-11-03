import React, { Component } from "react";
import PropTypes from "prop-types";
import { sortBy, toPairs, groupBy, prop, map } from "ramda";
import { Text, Heading, Group, Loading, Icon } from "@offcourse/atoms";
import { sizes } from "@offcourse/constants";
import Loadable from "react-loadable";
import system from "system-components";

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

const Paragraph = ({ children }) => {
  return (
    <Group mb={7}>
      <Text size={LARGE}>{children}</Text>
    </Group>
  );
};
const { SMALL, NORMAL, LARGE, EXTRA_LARGE } = sizes;

export default class FAQView extends Component {
  static propTypes = {
    about: PropTypes.object,
    handlers: PropTypes.object
  };

  render() {
    const { about, handlers } = this.props;
    const { title, questions, address } = about;
    const sections = groupBy(prop("category"), questions);
    // const sortedSections = sortBy(prop(0), toPairs(sections));
    const sortedSections = toPairs(sections);
    const [platform, ...rest] = sortedSections;
    const pQuestions = platform[1];
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
              <Group flex="none" key={platform[0]}>
                <Group mb={7}>
                  <Heading size={SMALL}>{platform[0]}</Heading>
                </Group>
                {map(({ question, answer }) => {
                  console.log(question, answer);
                  return (
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
                  );
                }, pQuestions)}
              </Group>
            </Group>
            <Group>
              {map(([sectionTitle, questions]) => {
                return (
                  <Group flex="none" mb={6} key={sectionTitle}>
                    <Group mb={7}>
                      <Heading size={SMALL}>{sectionTitle}</Heading>
                    </Group>
                    {map(({ question, answer }) => {
                      return (
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
                      );
                    }, questions)}
                  </Group>
                );
              }, rest)}
            </Group>
          </Grid>
        </Temp>
      </Group>
    );
  }
}
