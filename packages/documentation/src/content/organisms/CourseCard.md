This organism structures several elements into the CourseCard component

```react|span-6
responsive: true
---
const course = {
  courseId: "abc",
  goal: "Learn This",
  curator: "Offcourse",
  courseUrl: "/yeehaa",
  profileUrl: `/curator/yeehaa`,
  checkpoints: [
    {
      checkpointId: "a",
      task: `Gentrify adipisicing fanny pack pabst, health goth excepteur ut sunt swag quo`,
      resourceUrl: "/"
    },
    {
      checkpointId: "b",
      task: "Do That",
      completed: true,
      resourceUrl: "/"
    },
    {
      checkpointId: "c",
      task: "Do More",
      resourceUrl: "/"
    }
  ],
  tags: ["tic", "tac", "toe"],
  description: `Gentrify adipisicing fanny pack pabst, health goth excepteur ut sunt swag qui plaid tumeric letterpress. Wolf gentrify live-edge 8-bit. Af ut thundercats locavore williamsburg, blue bottle man braid viral`
};
  <CourseCard course={course} />
```

An onCheckpointToggle callback can be added to make the progress trackable

```react|span-6
const course = {
  courseId: "abc",
  goal: "Learn This",
  curator: "Offcourse",
  courseUrl: "/yeehaa",
  profileUrl: `/curator/yeehaa`,
  checkpoints: [
    {
      checkpointId: "a",
      task: `Gentrify adipisicing fanny pack pabst, health goth excepteur ut sunt swag quo`,
      resourceUrl: "/"
    },
    {
      checkpointId: "b",
      task: "Do That",
      completed: true,
      resourceUrl: "/"
    },
    {
      checkpointId: "c",
      task: "Do More",
      resourceUrl: "/"
    }
  ],
  tags: ["tic", "tac", "toe"],
  description: `Gentrify adipisicing fanny pack pabst, health goth excepteur ut sunt swag qui plaid tumeric letterpress. Wolf gentrify live-edge 8-bit. Af ut thundercats locavore williamsburg, blue bottle man braid viral`
};
  <CourseCard onCheckpointToggle={console.log} course={course} />
```

An onCuratorClick can be added to make the name clickable, which can be a useful functionality for users navigating through the available content

```react|span-6
const course = {
  courseId: "abc",
  goal: "Learn This",
  curator: "Offcourse",
  courseUrl: "/yeehaa",
  profileUrl: `/curator/yeehaa`,
  checkpoints: [
    {
      checkpointId: "a",
      task: `Gentrify adipisicing fanny pack pabst, health goth excepteur ut sunt swag quo`,
      resourceUrl: "/"
    },
    {
      checkpointId: "b",
      task: "Do That",
      completed: true,
      resourceUrl: "/"
    },
    {
      checkpointId: "c",
      task: "Do More",
      resourceUrl: "/"
    }
  ],
  tags: ["tic", "tac", "toe"],
  description: `Gentrify adipisicing fanny pack pabst, health goth excepteur ut sunt swag qui plaid tumeric letterpress. Wolf gentrify live-edge 8-bit. Af ut thundercats locavore williamsburg, blue bottle man braid viral`
};
const onCuratorClick = ({name, profileUrl}) => alert(`curator is ${name}, url is ${profileUrl}`);

const onTagClick = ({tag, href}) => alert(`curator is ${tag}, url is ${href}`);
  <CourseCard onCuratorClick={onCuratorClick} onTagClick={onTagClick} onCheckpointToggle={console.log} course={course} />
```
