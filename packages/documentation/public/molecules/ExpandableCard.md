given a layout this card becomes resizeable;
```react
const layout = [
  ["title"],
  ["title", "actions"], 
  ["title", "body", "actions"]
];

<ExpandableCard layout={layout}>
  <div section="title">Hello</div>
  <div section="body">Hi</div>
  <div section="actions">Bye</div>
</ExpandableCard>
```
it can take an optional callback on resize

```react
const layout = [
  ["title"],
  ["title", "actions"], 
  ["title", "body", "actions"]
];

const logJSON = obj => console.log(JSON.stringify(obj, null, 2));

<ExpandableCard layout={layout} onResize={logJSON}>
  <div section="title">Hello</div>
  <div section="body">Hi</div>
  <div section="actions">Bye</div>
</ExpandableCard>
```

you can set a default index (0 based)

```react
const layout = [
  ["title"],
  ["title", "actions"], 
  ["title", "body", "actions"]
];

const logJSON = obj => console.log(JSON.stringify(obj, null, 2));

<ExpandableCard defaultLevel={0} layout={layout} onResize={logJSON}>
  <div section="title">Hello</div>
  <div section="body">Hi</div>
  <div section="actions">Bye</div>
</ExpandableCard>
```

without any props, it behaves like any other card

```react

<ExpandableCard>
  <div section="title">Hello</div>
  <div section="body">Hi</div>
  <div section="actions">Bye</div>
</ExpandableCard>
```