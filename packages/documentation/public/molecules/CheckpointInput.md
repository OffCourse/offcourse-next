```react|span-3
state: {
  checkpoint: {
    task: "Learn GraphQL basics",
    resourceUrl: "/graphql"
  },
  hasErrors: false
}
---

const onChange = (e) => {
  const { name , value } = e.target;
  const itemNames = name.split(".");
  const newState = { ...state };
  newState[itemNames[0]][itemNames[1]] = value;
  setState(newState);
};

const onBlur = () => {
  setState({hasErrors: !state.hasErrors});
};

const icons = [
  {is: "button", name: "remove", tabIndex: "-1"},
  {is: "button", name: "sort", tabIndex: "-1"},
];

<CheckpointInput hasErrors={state.hasErrors} onBlur={onBlur} onChange={onChange} name="checkpoint" value={state.checkpoint}>
  <IconGroup icons={icons} color="grayScale.2" direction="vertical" size="small"/>
</CheckpointInput>
```
