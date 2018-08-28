import { map, curry } from "ramda";
import { queries, fragments } from "../graphql";

const fork = (forkCourse, { courseId }) => {
  return forkCourse({
    variables: { courseId },
    update: (cache, { data }) => {
      const { checkpoints, goal, curator, ...rest } = data.forkCourse;
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
          courseId: rest.courseId
        },
        data: {
          course: {
            goal,
            curator,
            checkpoints,
            fork: null,
            ...rest
          }
        }
      });

      cache.writeQuery({
        query: queries.courseWithStatus,
        variables: {
          courseQuery: {
            curator,
            goal
          }
        },
        data: {
          course: {
            goal,
            curator,
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
