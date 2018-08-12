render a plain item when not trackable

```react
const checkpoint = {
  checkpointId: "abc",
  completed: true,
  task: "do this",
  resourceUrl: "#/molecules/List"
};

<CheckpointItem {...checkpoint}/>
```

render a checkitem when it gets an onToggle callback

```react
const onToggle =({ checkpointId, checked }) => {
  alert(
    `the id of this item is: ${checkpointId}, its checked status is ${checked}`
  )
};

const checkpoint = {
  checkpointId: "abc",
  completed: true,
  task: "do this",
  resourceUrl: "#/molecules/List"
};

<CheckpointItem onToggle={onToggle} {...checkpoint}/>
```
