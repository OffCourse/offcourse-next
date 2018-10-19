This organism structures several elements into the CheckpointCard component

```react|span-6,dark
const checkpoint = {
  task: "Do something",
  course: {
    goal: "Do More"
  }
};
<CheckpointCard checkpoint={checkpoint}/>
```

```react|span-6,dark
const checkpoint = {
  task: "Do something",
  resource: {
    resourceType: "video",
  },
  tags: ["Designer", "Service", "Platform"],
  course: {
    goal: "Do More"
  }
};
<CheckpointCard checkable checkpoint={checkpoint}/>
```

```react|span-6,dark
const checkpoint = {
  task: "Do something",
  resource: {
    resourceType: "html",
  },
  tags: ["Designer", "Service", "Platform"],
  course: {
    goal: "Do More"
  }
};
<CheckpointCard checkable checkpoint={checkpoint}/>
```
