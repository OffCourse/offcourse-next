The ButtonGroup molecule can explicitly declare icons

```react
const onClick = () => alert("click");
const Button = ButtonGroup.Button;

<ButtonGroup>
  <Button variant="positive" onClick={onClick}>
    Please Click
  </Button>
  <Button variant="primary" href="#/molecules/Curator">
    Click Now!
  </Button>
  <Button variant="negative" onClick={onClick}>
    Don't Click
  </Button>
</ButtonGroup>
```

Or it can pass the button data as a prop

```react
const onClick = () => alert("click");
const buttons = [
  { onClick, title: "Create Course" },
  { onClick, title: "Profile", variant: "warning" },
  { onClick, title: "Sign Out", variant: "negative" }
];
<ButtonGroup buttons={buttons} />;
```

It can also change the button to a smaller size

```react
const onClick = () => alert("click");
const buttons = [
  { onClick, title: "Mini", variant: "primary" },
  { onClick, title: "Small" },
  { onClick, title: "Tiny", variant: "warning" }
];
<ButtonGroup size="small" buttons={buttons} />;
```

Or to a bigger size

```react
const onClick = () => alert("click");
const buttons = [
  { onClick, title: "huge", variant: "warning"},
  { onClick, title: "gargantuan", variant: "negative" }
];
<ButtonGroup size="large" buttons={buttons} />;
```
