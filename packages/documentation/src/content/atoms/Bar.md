Bars can be docked at the top

```react
const { TOP  } = positions;
<div>
  <Heading>Hello World</Heading>
  <Heading>Hello World</Heading>
  <Heading>Hello World</Heading>
  <Heading>Hello World</Heading>
  <Heading>Hello World</Heading>
  <Bar isDocked={false} position={ TOP }>
    <Heading>Hello World</Heading>
    <Heading>Hello World</Heading>
    <Heading>Hello World</Heading>
  </Bar>
</div>
```

Bars can also be docked at the bottom of the window

```react
const { BOTTOM } = positions;
<div>
  <Heading>Hello World</Heading>
  <Heading>Hello World</Heading>
  <Heading>Hello World</Heading>
  <Heading>Hello World</Heading>
  <Heading>Hello World</Heading>
  <Bar isDocked={false} position={ BOTTOM }>
    <Heading>Hello World</Heading>
    <Heading>Hello World</Heading>
    <Heading>Hello World</Heading>
  </Bar>
</div>
```

They are fixed by default, but this behaviour can be overridden with the 'isDocked' prop
