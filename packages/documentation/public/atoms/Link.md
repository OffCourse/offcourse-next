Links can take a href

```react|span-2
<Link href="/">Follow Me</Link>
```

```react|span-2
<Link disabled href="/">
  Cannot Follow
</Link>
```

or they can take a click handler

```react|span-2
const clickHandler = () => alert("ALERT");
<Link onClick={clickHandler}>Click Me</Link>
```

```react|span-2
const clickHandler = () => alert("ALERT");
<Link disabled onClick={clickHandler}>
  Cannot Click
</Link>
```
