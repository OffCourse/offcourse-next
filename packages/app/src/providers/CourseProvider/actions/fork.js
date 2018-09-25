import { map, curry } from "ramda";
import { queries, fragments } from "../graphql";

const fork = (forkCourse, { courseId }) => {
  return forkCourse({
    variables: { courseId },
    update: (cache, { data }) => {
      const {
        checkpoints,
        checkpoint,
        goal,
        curator,
        ...rest
      } = data.forkCourse;
      const checkpointsWithStatus = map(cp => {
        return { ...cp, completed: false };
      }, checkpoints);

      cache.writeFragment({
        id: courseId,
        fragment: fragments.Fork,
        data: {
          __typename: "Course",
          fork: {
            __typename: "Course",
            goal,
            curator
          }
        }
      });
      cache.writeQuery({
        query: queries.course,
        variables: {
          courseQuery: {
            curator,
            goal
          },
          isAuthenticated: true,
          needsContent: false
        },
        data: {
          course: {
            goal,
            curator,
            checkpoint: null,
            checkpoints: checkpointsWithStatus,
            fork: null,
            ...rest
          }
        }
      });
    }
  });
};

export default curry(fork);
