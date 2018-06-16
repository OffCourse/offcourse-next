import Head from "next/head";
import { assoc, pick, uniq, map, mergeDeepWithKey } from "ramda";
import { ThemeProvider, injectGlobal } from "styled-components";
import { offcourse as theme } from "@offcourse/themes";
import { AppShell } from "@offcourse/organisms";
import { Query, graphql } from "react-apollo";
import gql from "graphql-tag";
import CardLayout from "../components/CardLayout";

const filterTags = oldTags => {
  const tags = new Set(oldTags.filter(t => t && t));
  return Array.from(tags);
};

injectGlobal([theme.globals]);

const baseUrl = "http://dfjdfsla.io";

const GET_COURSES = gql`
  query courses($first: Int, $after: String) {
    courses(first: $first, after: $after) {
      pageInfo {
        startCursor
        endCursor
        hasNextPage
      }
      edges {
        cursor
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
  after: "",
  first: COURSES_PER_PAGE
};

const mapCourses = courses =>
  map(
    ({ node }) => ({
      ...node,
      tags: filterTags(node.tags),
      courseUrl: "TEST"
    }),
    courses
  );

class App extends React.Component {
  state = {
    isOpen: false
  };

  render() {
    const toggle = () => this.setState({ isOpen: !this.state.isOpen });
    const links = [
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
          <Query query={GET_COURSES}>
            {({ loading, error, data, fetchMore }) => {
              if (loading) return null;
              if (error) return null;

              const { edges, pageInfo } = data.courses;
              const items = mapCourses(edges);

              return (
                <CardLayout
                  hasMore={pageInfo.hasNextPage}
                  loadMore={() => {
                    fetchMore({
                      query: GET_COURSES,
                      variables: { after: data.courses.pageInfo.endCursor },
                      updateQuery: (previousResult, { fetchMoreResult }) => {
                        const ml = map(pick(["node", "cursor"]));
                        const updateList = (l, r) => {
                          return uniq(
                            map(assoc("__typename", "CourseEdge"), [
                              ...ml(l),
                              ...ml(r)
                            ])
                          );
                        };
                        let concatValues = (k, l, r) => {
                          return k == "edges" ? updateList(l, r) : r;
                        };

                        const newResult = mergeDeepWithKey(
                          concatValues,
                          previousResult,
                          fetchMoreResult
                        );

                        return newResult;
                      }
                    });
                  }}
                  items={items}
                />
              );
            }}
          </Query>
        </AppShell>
      </ThemeProvider>
    );
  }
}

export default App;
