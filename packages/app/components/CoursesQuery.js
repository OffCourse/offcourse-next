import { Query } from "react-apollo";
import { assoc, pick, uniq, map, mergeDeepWithKey } from "ramda";
import coursesQuery from "./coursesQuery.graphql";

const filterTags = oldTags => {
  const tags = new Set(oldTags.filter(t => t && t));
  return Array.from(tags);
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

export default class CoursesQuery extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Query query={coursesQuery}>
        {({ loading, error, data, fetchMore }) => {
          const { edges, pageInfo } = data.courses;
          const courses = mapCourses(edges);
          const hasMore = pageInfo.hasNextPage;
          const loadMore = () => {
            fetchMore({
              query: coursesQuery,
              variables: { after: pageInfo.endCursor },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                const ml = map(pick(["node", "cursor"]));
                const updateList = (l, r) => {
                  return uniq(
                    map(assoc("__typename", "CourseEdge"), [...ml(l), ...ml(r)])
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
          };
          return children({ courses, hasMore, loadMore, loading, error });
        }}
      </Query>
    );
  }
}
