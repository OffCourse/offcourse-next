CourseCard Component.

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
  <CourseCard course={course} />
```

Pass an onCheckpointToggle callback to make it trackable

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

Pass an onCuratorClick mainly for client side routing

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
