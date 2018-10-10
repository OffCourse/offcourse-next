The ButtonGroup molecule can explicitly declare icons

```react
const onClick = () => alert("click");
const Button = ButtonGroup.Button;
const { POSITIVE, INFO, NEGATIVE } = variants;

<ButtonGroup>
  <Button variant={ POSITIVE } onClick={onClick}>
    Please Click
  </Button>
  <Button variant={ INFO } href="#/molecules/Curator">
    Click Now!
  </Button>
  <Button variant={ NEGATIVE } onClick={onClick}>
    Don't Click
  </Button>
</ButtonGroup>
```

Or it can pass the button data as a prop

```react
const onClick = () => alert("click");
const { WARNING, NEGATIVE } = variants;
const buttons = [
  { onClick, title: "Create Course" },
  { onClick, title: "Profile", variant: WARNING },
  { onClick, title: "Sign Out", variant: NEGATIVE }
];
<ButtonGroup buttons={buttons} />;
```

It can also change the button to a smaller size

```react
const onClick = () => alert("click");
const { WARNING, INFO } = variants;
const { SMALL } = sizes;
const buttons = [
  { onClick, title: "Mini", variant: INFO },
  { onClick, title: "Small" },
  { onClick, title: "Tiny", variant: WARNING }
];
<ButtonGroup size={ SMALL } buttons={buttons} />;
```

Or to a bigger size

```react
const onClick = () => alert("click");
const { WARNING, NEGATIVE } = variants;
const { LARGE } = sizes;
const buttons = [
  { onClick, title: "huge", variant: WARNING},
  { onClick, title: "gargantuan", variant: NEGATIVE }
];
<ButtonGroup size={ LARGE } buttons={buttons} />;
```
