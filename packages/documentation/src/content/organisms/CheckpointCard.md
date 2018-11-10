This organism structures several elements into the CheckpointCard component

```react|span-6,dark
const checkpoint = {
  task: "Do something",
  course: {
    goal: "Do More"
  }
};
<CheckpointCard level={0} checkpoint={checkpoint}/>
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
<CheckpointCard checkable level={1} checkpoint={checkpoint}/>
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
const breadcrumbs = [
    { text: "Go Here",
      onClick: () => console.log("x")
    }
];
<CheckpointCard breadcrumbs={breadcrumbs} checkable level={2} checkpoint={checkpoint}/>
```
