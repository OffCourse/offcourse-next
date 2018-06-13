import Head from "next/head";
import { map, times, identity, mergeDeepRight } from "ramda";
import { ThemeProvider, injectGlobal } from "styled-components";
import { offcourse as theme } from "@offcourse/themes";
import { Card, Heading, Group, Button, Masonry, Text } from "@offcourse/atoms";
import CardLayout from "../components/CardLayout";
import { AppShell } from "@offcourse/organisms";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const filterTags = oldTags => {
  const tags = new Set(oldTags.filter(t => t && t));
  return Array.from(tags);
};

injectGlobal([theme.globals]);

const baseUrl = "http://dfjdfsla.io";

class App extends React.Component {
  state = {
    isOpen: false
  };

  render() {
    const toggle = () => this.setState({ isOpen: !this.state.isOpen });
    const { courses, loading } = this.props.data;
    const items = loading
      ? []
      : map(
          ({ node }) => ({
            ...node,
            tags: filterTags(node.tags),
            courseUrl: "TEST"
          }),
          courses.edges
        );

    const links = [
      {
        onClick: this.props.loadMoreCourses,
        title: "Load More",
        level: 1
      },
      {
        href: "https://condescending-wing-149611.netlify.com/",
        title: "Contribute",
        level: 3
      }
    ];
    return (
      <ThemeProvider theme={theme}>
        <AppShell
          position="fixed"
          onLogoClick={toggle}
          toggleSidebar={toggle}
          isSidebarOpen={this.state.isOpen}
          links={links}
        >
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <CardLayout items={items} />
        </AppShell>
      </ThemeProvider>
    );
  }
}
const coursesQuery = gql`
  {
    courses {
      edges {
        node {
          goal
          curator
          timestamp
          courseId
          description
          revision
          tags
          checkpoints {
            task
            checkpointId
            resourceUrl
          }
        }
      }
    }
  }
`;

const COURSES_PER_PAGE = 10;

export const coursesQueryVars = {
  skip: 0,
  first: COURSES_PER_PAGE
};

export default graphql(coursesQuery, {
  options: {
    variables: coursesQueryVars
  },
  props: ({ data }) => {
    return {
      data,
      loadMoreCourses: () => {
        return data.fetchMore({
          variables: {
            skip: data.courses.length
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
              return previousResult;
            }
            return mergeDeepRight(previousResult, fetchMoreResult);
          }
        });
      }
    };
  }
})(App);
