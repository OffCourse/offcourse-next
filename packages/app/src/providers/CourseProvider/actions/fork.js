import { map, curry } from "ramda";
import { queries, fragments } from "../graphql";

const checkpointsWithStatus = map(cp => ({ ...cp, completed: false }));

const fork = (forkCourse, { courseId: oldId }) => {
  return forkCourse({
    variables: { courseId: oldId, isAuthenticated: true },
    update: (cache, { data }) => {
      const { courseId, checkpoints, goal, curator, ...rest } = data.forkCourse;
      cache.writeFragment({
        id: oldId,
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
          courseId,
          isAuthenticated: true
        },
        data: {
          course: {
            courseId,
            goal,
            curator,
            checkpoint: null,
            checkpoints: checkpointsWithStatus(checkpoints),
            fork: null,
            ...rest
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
          isAuthenticated: true
        },
        data: {
          course: {
            courseId,
            goal,
            curator,
            checkpoint: null,
            checkpoints: checkpointsWithStatus(checkpoints),
            fork: null,
            ...rest
          }
        }
      });
    }
  });
};

export default curry(fork);
