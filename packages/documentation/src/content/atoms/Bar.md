Bars can be docked at the top...

```react
<div>
  <Heading>Hello World</Heading>
  <Heading>Hello World</Heading>
  <Heading>Hello World</Heading>
  <Heading>Hello World</Heading>
  <Heading>Hello World</Heading>
  <Bar position="absolute" docked="top">
    <Heading>Hello World</Heading>
    <Heading>Hello World</Heading>
    <Heading>Hello World</Heading>
  </Bar>
</div>
```

...or the bottom of the window

```react
<div>
  <Heading>Hello World</Heading>
  <Heading>Hello World</Heading>
  <Heading>Hello World</Heading>
  <Heading>Hello World</Heading>
  <Heading>Hello World</Heading>
  <Bar position="absolute" docked="bottom">
    <Heading>Hello World</Heading>
    <Heading>Hello World</Heading>
    <Heading>Hello World</Heading>
  </Bar>
</div>
```

they are fixed by default, but this behaviour can be overridden with the position 'prop'
