The default Offcourse logo can be used in four sizes

```react|span-6
const clickHandler = () => alert("ALERT!");
<Logo onClick={clickHandler} />;
```

```react|span-6
const clickHandler = () => alert("ALERT!");
const { NORMAL } = sizes;
<Logo size={NORMAL} onClick={clickHandler} />;
```

```react|span-6
const clickHandler = () => alert("ALERT!");
const { LARGE } = sizes;
<Logo size={LARGE} onClick={clickHandler} />;
```

```react|span-6
const clickHandler = () => alert("ALERT!");
const { EXTRA_LARGE } = sizes;
<Logo size={EXTRA_LARGE} onClick={clickHandler} />;
```
