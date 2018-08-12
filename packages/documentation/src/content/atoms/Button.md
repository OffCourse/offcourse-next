Default and Disabled Button

```react|span-2
const clickHandler = () => alert("ALERT");
<Button onClick={clickHandler}>Click Me</Button>
```

```react|span-2
const clickHandler = () => alert("ALERT");
<Button onClick={clickHandler} disabled>
  Cannot Click
</Button>
```

Meaningful variants

```react|span-2
const clickHandler = () => alert("ALERT");
  <Button variant="primary" href="/">
    Click Now!
  </Button>
```

```react|span-2
const clickHandler = () => alert("ALERT");
  <Button variant="positive" onClick={clickHandler}>
    Please Click
  </Button>
```

```react|span-2
const clickHandler = () => alert("ALERT");
  <Button variant="negative" onClick={clickHandler}>
    Don't Click
  </Button>
```

3 different sizes

```react|span-2
const clickHandler = () => alert("ALERT");
  <Button size="small" variant="primary" href="/">
    Click!
  </Button>
```

```react|span-2
const clickHandler = () => alert("ALERT");
  <Button size="medium" variant="positive" onClick={clickHandler}>
    Please Click
  </Button>
```

```react|span-2
const clickHandler = () => alert("ALERT");
  <Button size="large" variant="negative" onClick={clickHandler}>
    Click Click Click Click Click
  </Button>
```
