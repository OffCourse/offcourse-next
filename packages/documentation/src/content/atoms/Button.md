Buttons can be set into two modes: default or disabled

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

Moreover, the buttons can have meaningful variants

```react|span-2
const clickHandler = () => alert("ALERT");
const { INFO } = variants;
<Button variant={INFO} href="/">
  Click Now!
</Button>
```

```react|span-2
const clickHandler = () => alert("ALERT");
const { POSITIVE } = variants;
<Button variant={ POSITIVE } onClick={clickHandler}>
  Please Click
</Button>
```

```react|span-2
const clickHandler = () => alert("ALERT");
const { WARNING } = variants;
<Button variant={ WARNING } onClick={clickHandler}>
  Don't Click
</Button>
```

```react|span-2
const clickHandler = () => alert("ALERT");
const { NEGATIVE } = variants;
<Button variant={ NEGATIVE } onClick={clickHandler}>
  Don't Click
</Button>
```

Buttons can have three different sizes

```react|span-2
const clickHandler = () => alert("ALERT");
const { INFO } = variants;
const { SMALL } = sizes;
<Button size={ SMALL } href="/">
  Click!
</Button>
```

```react|span-2
const clickHandler = () => alert("ALERT");
const { MEDIUM } = sizes;
const { INFO } = variants;
<Button size={ MEDIUM } variant={ INFO } onClick={clickHandler}>
  Please Click
</Button>
```

```react|span-2
const clickHandler = () => alert("ALERT");
const { LARGE } = sizes;
const { INFO } = variants;
<Button size={ LARGE } variant={ INFO } onClick={clickHandler}>
  Click Click Click Click Click
</Button>
```
