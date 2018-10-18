Inputs mostly behave like their HTML counterparts

```react|plain
<Input name="test" placeholder="Test" />
```

Setting an input’s value directly makes them controlled; in this you also need an onChange callback

```react|plain
state: {
  text: "something"
}
---
const handleChange = (e) => {
  const text = e.target.value;
  setState({text: text.toLowerCase()})
};

const handleSubmit = (e) => {
  alert(e.target.value());
};


<Input onSubmit={handleSubmit} value={state.text} onChange={handleChange} name="test" placeholder="Test" />
```

An input can also take an optional onBlur callback

```react|plain
state: {
  text: "something"
}
---
const handleChange = (e) => {
  const text = e.target.value;
  setState({text: text.toLowerCase()})
};
const handleBlur = (e) => {
  const text = e.target.value;
  setState({text: text.toUpperCase()})
};

<Input value={state.text} onBlur={handleBlur} onChange={handleChange} name="test" placeholder="Test" />
```

Input fields also come in a smaller size

```react|plain
<Input name="test" variant="small" placeholder="Test" />
```

Furthermore, you can indicate if the field has errors

```react|plain
<Input name="test" hasErrors placeholder="Test" />
```

Lastly, inputs can also cover multiple lines

```react|plain
<Input name="test" variant="textarea" placeholder="Test" />
```

```react|plain
<Input name="test" variant="textarea" placeholder="Test" />
```
