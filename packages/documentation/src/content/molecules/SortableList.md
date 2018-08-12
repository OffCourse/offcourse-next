Sortable Lists can be vertical

```react
state: {items: ["Aaa aaaa", "Bbb bbbb", "Ccc ccccc"]}
---
const Item = SortableList.Item;
const move = SortableList.move;

const onSort = ({oldIndex, newIndex}) => {
  setState({
    items: move(state.items, oldIndex, newIndex),
  });
};

<SortableList onSort={onSort}>
  {state.items.map((val,index ) => {
    return <Item key={`item-${index}`}>{val}</Item>
  })}
</SortableList>
```

or they can be horizontal

```react
state: {items: ["Aaa aaaa", "Bbb bbbb", "Ccc ccccc"]}
---
const Item = SortableList.Item;
const move = SortableList.move;

const onSort = ({oldIndex, newIndex}) => {
  setState({
    items: move(state.items, oldIndex, newIndex),
  });
};

<SortableList direction="horizontal" onSort={onSort}>
  {state.items.map((val,index ) => {
    return <Item key={`item-${index}`}>{val}</Item>
  })}
</SortableList>
```

or they can consist of custom item components

```react
state: {items: ["Aaa aaaa", "Bbb bbbb", "Ccc ccccc"]}
---

const onToggle =({ id, checked }) => {
  alert(
    `the index of this item is: ${id}, its checked status is ${checked}`
  )
};

const move = SortableList.move;
const onSort = ({oldIndex, newIndex}) => {
  setState({
    items: move(state.items, oldIndex, newIndex),
  });
};

<SortableList onSort={onSort}>
  {state.items.map((val,index ) => {
     return (
       <CheckItem id={index} key ={`items-${index}`} onToggle={onToggle} checked={true}>{val}</CheckItem>
     )}
  )}
</SortableList>
```
