import Head from "next/head";
import { pick, uniq, map, mergeDeepWithKey } from "ramda";
import { ThemeProvider, injectGlobal } from "styled-components";
import { offcourse as theme } from "@offcourse/themes";
import { Loading } from "@offcourse/atoms";
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
              if (loading) return <Loading size="large" />;
              if (error) return <div>HI</div>;

              const items = mapCourses(data.courses.edges);

              return (
                <CardLayout
                  loadMore={() => {
                    fetchMore({
                      query: GET_COURSES,
                      variables: { after: data.courses.pageInfo.endCursor },
                      updateQuery: (previousResult, { fetchMoreResult }) => {
                        const updateList = (l, r) => {
                          const oldList = map(
                            i => pick(["node", "cursor"], i),
                            l
                          );
                          const newList = map(
                            i => pick(["node", "cursor"], i),
                            r
                          );
                          return uniq(
                            map(
                              i => {
                                return { ...i, __typename: "CourseEdge" };
                              },
                              [...oldList, ...newList]
                            )
                          );
                        };
                        let concatValues = (k, l, r) => {
                          return k == "edges" ? updateList(l, r) : l;
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
