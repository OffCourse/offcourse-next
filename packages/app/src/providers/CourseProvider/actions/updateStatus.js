import { map, curry } from "ramda";
import { fragments } from "../graphql";

const updateStatus = (update, { courseId, task, checkpointId, checked }) =>
  update({
    variables: {
      statusUpdate: { courseId, checkpointId }
    },
    optimisticResponse: {
      __typename: "Mutation",
      updateStatus: {
        courseId,
        __typename: "Course"
      }
    },
    update: (cache, _) => {
      const { checkpoints } = cache.readFragment({
        id: courseId,
        variables: {
          task
        },
        fragment: fragments.Checkpoints
      });

      cache.writeFragment({
        id: courseId,
        fragment: fragments.Checkpoints,
        data: {
          __typename: "Course",
          checkpoints: map(
            checkpoint => ({
              ...checkpoint,
              completed:
                checkpoint.checkpointId === checkpointId
                  ? checked
                  : checkpoint.completed
            }),
            checkpoints
          )
        }
      });
    }
  });

export default curry(updateStatus);
