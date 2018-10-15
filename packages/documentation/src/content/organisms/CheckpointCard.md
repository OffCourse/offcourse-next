This organism structures several elements into the CheckpointCard component

```react|span-6
const checkpoint = {
  task: "Do something",
  tags: ["Designer", "Service", "Platform"],
  course: {
    goal: "Do More"
  }
};
<CheckpointCard checkpoint={checkpoint}/>
```

```react|span-6
const checkpoint = {
  task: "Do something",
  tags: ["Designer", "Service", "Platform"],
  course: {
    goal: "Do More"
  }
};
<CheckpointCard checkable checkpoint={checkpoint}/>
```
