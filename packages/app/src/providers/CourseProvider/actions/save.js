import { curry } from "ramda";
import { queries } from "../graphql";

const save = (addCourse, meta, proposal) => {
  return addCourse({
    variables: { course: { ...meta, ...proposal } },
    update: (cache, { data }) => {
      const { courseId, goal, curator, ...savedCourse } = data.addCourse;
      cache.writeQuery({
        query: queries.course,
        variables: {
          courseid: courseId
        },
        data: {
          course: {
            goal,
            curator,
            courseId,
            ...savedCourse
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
            courseId,
            ...savedCourse
          }
        }
      });
    }
  });
};

export default curry(save);
