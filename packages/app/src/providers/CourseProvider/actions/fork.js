import { map, curry } from "ramda";
import { queries, fragments } from "../graphql";

const fork = (forkCourse, { courseId }) => {
  return forkCourse({
    variables: { courseid },
    update: (cache, { data }) => {
      const { checkpoints, goal, curator, ...rest } = data.forkcourse;
      const checkpointswithstatus = map(cp => {
        return { ...cp, completed: false };
      }, checkpoints);

      cache.writefragment({
        id: courseid,
        fragment: fragments.fork,
        data: {
          __typename: "course",
          fork: {
            __typename: "course",
            goal,
            curator
          }
        }
      });

      cache.writequery({
        query: queries.course,
        variables: {
          courseid: rest.courseid
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

      cache.writequery({
        query: queries.coursewithstatus,
        variables: {
          coursequery: {
            curator,
            goal
          }
        },
        data: {
          course: {
            goal,
            curator,
            checkpoints: checkpointswithstatus,
            fork: null,
            ...rest
          }
        }
      });
    }
  });
};

export default curry(fork);
