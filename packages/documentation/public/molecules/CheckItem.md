```react
const onToggle =({ id, checked }) => {
  alert(
    `the id of this item is: ${id}, its checked status is ${checked}`
  )
};

<CheckItem id={1} onToggle={onToggle} checked={true}>KWEK KWAK</CheckItem>
```

```react
const onToggle =({ id, checked }) => {
  alert(
    `the id of this item is: ${id}, its checked status is ${checked}`
  )
};

<CheckItem href="#/molecules/List" id={1} onToggle={onToggle} checked={true}>Kwik KWEK KWAK</CheckItem>
```
