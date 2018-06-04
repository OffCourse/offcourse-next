Inputfield make handling with Inputs on Forms easier

```react
<InputField title="Goal of the Course" name="goal" placeholder="Goal" />
```

They can be small

```react
<InputField
  variant="small"
  title="Goal of the Course"
  name="goal"
  placeholder="Goal"
/>
```

Display a custom Input Component

```react
<InputField
  variant="small"
  title="Goal of the Course"
  name="goal"
  FieldComponent={PasswordInput}
/>
```

They can contain multiple lines of text

```react
<InputField
  variant="textarea"
  title="Description of the Course"
  name="description"
  placeholder="Description"
/>
```

They can display errors

```react
<InputField
  errors={["Goal Too Short", "Goal Too Long"]}
  title="Goal of the Course"
  name="goal"
  placeholder="Goal"
/>
```

They can display children

```react
state: { items: ["", ""], errors: [null, null] }
---
const onChange = (e) => {
  const { name , value } = e.target;
  const items = [...state.items];
  const index = name.split(".")[1];
  items[index] = value;
  setState({ items })
};

<InputField
  title="Goal of the Course"
  name="goal"
  errors={state.errors}
  placeholder="Goal">
  <InputList
    title="Form Fields"
    onChange={onChange}
    name="form_fields"
    items={state.items}
    errors={state.errors}/>
</InputField>
```
