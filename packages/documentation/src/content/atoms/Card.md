A card has a title, some text and a button

```react|span-3
---
const { LARGE } = sizes;
<Card>
  <Heading section="title">Hello</Heading>
  <Group section="body">Hello</Group>
  <Group section="actions"><Button size={ LARGE }>Bye</Button></Group>
</Card>
```

A card has a title, some text and a button

```react|span-3
---
const { LARGE } = sizes;
const { SELECTABLE } = affordances;
<Card affordance={SELECTABLE}>
  <Heading section="title">Hello</Heading>
  <Group section="body">Hello</Group>
  <Group section="actions"><Button size={ LARGE }>Bye</Button></Group>
</Card>
```
