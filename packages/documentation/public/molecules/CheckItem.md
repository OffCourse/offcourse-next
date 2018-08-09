The CheckItem molecule adds a toggle that can be used to switch between two different options: checked or unchecked

```react
const onToggle =({ id, checked }) => {
  alert(
    `the id of this item is: ${id}, its checked status is ${checked}`
  )
};

<CheckItem id={1} onToggle={onToggle} checked={true}>KWEK KWAK</CheckItem>
```

This toggle can also be added to a list structure

```react
const onToggle =({ id, checked }) => {
  alert(
    `the id of this item is: ${id}, its checked status is ${checked}`
  )
};

<CheckItem href="#/molecules/List" id={1} onToggle={onToggle} checked={true}>Kwik KWEK KWAK</CheckItem>
```
