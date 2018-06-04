Static InputList

```react|span-4
state: { items: ["", ""], errors: [null, "something went wrong"] }
---
const Input = InputList.Input;

const onChange = (e) => {
  const { name , value } = e.target;
  const items = [...state.items];
  const index = name.split(".")[1];
  items[index] = value;
  setState({ items })
};

const onBlur = (e) => {
  const { name , value } = e.target;
  const index = name.split(".")[1];
  const errors = state.items.map(() => null);
  errors[index] = "something went wrong";
  setState({ errors, value })
};


<InputList
  title="Form Fields"
  name="form_fields"
  placeholder="input"
  items={state.items}
  errors={state.errors}
  onChange={onChange}
  onBlur={onBlur}
/>
```

Arrangeable InputList

```react|span-4
state: { items: ["", ""], errors: [null, "something went wrong"] }
---
const Input = InputList.Input;

const onChange = (e) => {
  const { name , value } = e.target;
  const items = [...state.items];
  const index = name.split(".")[1];
  items[index] = value;
  setState({ items })
};

const onBlur = (e) => {
  const { name , value } = e.target;
  const index = name.split(".")[1];
  const errors = state.items.map(() => null);
  errors[index] = "something went wrong";
  setState({ errors, value })
};

const add = () => {
  setState({items: [...state.items, ""]})
};

const remove = (index) => {
  const items = state.items;
  items.splice(index, 1);
  setState({items });
};

const move = InputList.move;
const onSort = ({oldIndex, newIndex}) => {
  setState({
    items: move(state.items, oldIndex, newIndex),
    errors: move(state.errors, oldIndex, newIndex),
  });
};

<InputList
  arrangeable
  title="Form Fields"
  name="form_fields"
  placeholder="input"
  items={state.items}
  errors={state.errors}
  add={add}
  remove={remove}
  move={onSort}
  onChange={onChange}
  onBlur={onBlur}
/>
```

Arrangeable InputList with custom component

```react|span-4
state: { items: [{task: "Visit Us", resourceUrl: "http://offcourse.io"},{task: "", resourceUrl: ""}], errors: [null, "something went wrong"] }
---
const onChange = (e) => {
  const { name , value } = e.target;
  const itemNames = name.split(".");
  const newState = { ...state };
  newState[itemNames[0]][parseInt(itemNames[1])][itemNames[2]] = value;
  setState(newState);
};

const onBlur = (e) => {
  const { name , value } = e.target;
  const index = name.split(".")[1];
  const errors = state.items.map(() => null);
  errors[index] = "something went wrong";
  setState({ errors, value })
};

const add = () => {
  setState({items: [...state.items, {task: "", resourceUrl: ""}]})
};

const remove = (index) => {
  const items = state.items;
  items.splice(index, 1);
  setState({items });
};

const move = InputList.move;
const onSort = ({oldIndex, newIndex}) => {
  setState({
    items: move(state.items, oldIndex, newIndex),
    errors: move(state.errors, oldIndex, newIndex),
  });
};

<InputList
  arrangeable
  title="Form Fields"
  name="items"
  placeholder="input"
  items={state.items}
  errors={state.errors}
  add={add}
  remove={remove}
  move={onSort}
  onChange={onChange}
  onBlur={onBlur}
  FieldComponent={CheckpointInput}
/>
```
