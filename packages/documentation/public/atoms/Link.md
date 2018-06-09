Links can take a href

```react|span-2
<Link href="/">Follow Me</Link>
```

They can take a click handler

```react|span-2
const clickHandler = () => alert("ALERT");
<Link onClick={clickHandler}>Click Me</Link>
```

They can be basic

```react|span-2
const clickHandler = () => alert("ALERT");
<Link basic onClick={clickHandler}>Click Me</Link>
```

Links can be active

```react|span-2
const clickHandler = () => alert("ALERT");
<Link active onClick={clickHandler}>Click Me</Link>
```

And they can be disabled

```react|span-2
const clickHandler = () => alert("ALERT");
<Link disabled onClick={clickHandler}>Click Me</Link>
```
