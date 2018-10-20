import { pick, map, curry } from "ramda";
import { queries } from "../graphql";

const createInput = ({ courseId, goal, curator, description, checkpoints }) => {
  return {
    courseId,
    goal,
    curator,
    description,
    checkpoints
  };
};

const save = (addCourse, meta, proposal) => {
  return addCourse({
    variables: { course: { ...meta, ...proposal }, isAuthenticated: true },
    update: (cache, { data }) => {
      const {
        courseId,
        goal,
        curator,
        isAuthenticated,
        ...savedCourse
      } = data.addCourse;

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
