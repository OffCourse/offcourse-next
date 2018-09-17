import { times, range } from "ramda";

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const fakeCheckpoint = n => ({
  checkpointId: `cp-${n}`,
  task: "loading"
});

const fakeCourse = (x = "123") => ({
  courseId: `{course-${x}`,
  goal: "loading",
  curator: "loading",
  checkpoints: times(fakeCheckpoint, random(1, 7)),
  tags: times(() => "loading", random(4, 10))
});

const fakeCourses = (min, max) => times(fakeCourse, random(min, max));

export { fakeCheckpoint, fakeCourse, fakeCourses };
