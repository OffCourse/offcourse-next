The CheckpointList molecule can be used to structure multiple checkpoints into a list

```react
const checkpoints = [{
  checkpointId: "abc",
  completed: true,
  task: "do this",
  resourceUrl: "#/molecules/List"
},{
  checkpointId: "def",
  completed: true,
  task: "do this",
  resourceUrl: "#/molecules/List"
},{
  checkpointId: "ghi",
  completed: true,
  task: "do this",
  resourceUrl: "#/molecules/List"
}];
<CheckpointList checkpoints={checkpoints}/>
```

In these lists, toggles can be included as well

```react
const onToggle =({ checkpointId, checked }) => {
  alert(
    `the id of this item is: ${checkpointId}, its checked status is ${checked}`
  )
};
const checkpoints = [{
  checkpointId: "abc",
  completed: true,
  task: "do this",
  resourceUrl: "#/molecules/List"
},{
  checkpointId: "def",
  completed: true,
  task: "do this",
  resourceUrl: "#/molecules/List"
},{
  checkpointId: "ghi",
  completed: true,
  task: "do this",
  resourceUrl: "#/molecules/List"
}];

<CheckpointList onToggle={onToggle} checkpoints={checkpoints}/>
```
