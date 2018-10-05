The checkbox atom can be checked or not

```react|span-3,dark
<Checkbox checked={true} />
```

```react|span-3,dark
<Checkbox checked={false} />
```

They also come in large

```react|dark
const { LARGE } = Checkbox.sizes;
<Checkbox size={ LARGE} checked={true} />
```

Checkbox atoms can (and probably should…) have a callback that’s triggered on toggle

```react|dark
const onToggle = ({ checked }) =>
  alert(`the checkbox is now ${checked ? "" : "un"}checked`);

<Checkbox onToggle={onToggle} checked={false} />
```
