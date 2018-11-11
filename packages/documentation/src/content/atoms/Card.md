A card has a title, some text and a button

```react|span-3
---
const { LARGE } = sizes;
<Card>
  <Section>
    <Heading>Hello</Heading>
  </Section>
  <Section>Hello</Section>
  <Section justifyContent="center"><Button size={ LARGE }>Bye</Button></Section>
</Card>
```

A card has a title, some text and a button

```react|span-3
---
const { LARGE } = sizes;
const { SELECTABLE } = affordances;
<Card affordance={SELECTABLE}>
  <Section>
    <Heading>Hello</Heading>
  </Section>
  <Section>Hello</Section>
  <Section justifyContent="center"><Button size={ LARGE }>Bye</Button></Section>
</Card>
```
