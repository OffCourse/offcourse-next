Checkbox can be checked or not

```react|span-3,dark
<Checkbox checked={true} />
```

```react|span-3,dark
<Checkbox checked={false} />
```

Checkbox can (probably should...) have a callback that's triggered on toggle

```react|dark
const onToggle = ({ checked }) =>
  alert(`the checkbox is now ${checked ? "" : "un"}checked`);

<Checkbox onToggle={onToggle} checked={false} />
```
