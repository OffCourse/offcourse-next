Lists can be vertical

```react
const Item = List.Item;
<List>
  <Item>Aaaaaaa</Item>
  <Item>Bbbbbbbbbbb</Item>
  <Item>Cccccc</Item>
  <Item>Ddddd</Item>
</List>
```

or they can be horizontal

```react
const Item = List.Item;
<List direction="horizontal">
  <Item>Aaaaaaa</Item>
  <Item>Bbbbbbbbbbb</Item>
  <Item>Cccccc</Item>
  <Item>Ddddd</Item>
</List>
```

or they can consist of custom item components

```react
const onToggle =({ id, checked }) => {
  alert(
    `the id of this item is: ${id}, its checked status is ${checked}`
  )
};
<List>
<CheckItem href="#/atoms/Item" id={1} onToggle={onToggle} checked={true}>KWIK</CheckItem>
<CheckItem href="#/atoms/Item" id={2} onToggle={onToggle} checked={true}>KWEK</CheckItem>
<CheckItem href="#/atoms/Item" id={3} onToggle={onToggle} checked={true}>KWAK</CheckItem>
</List>
```
