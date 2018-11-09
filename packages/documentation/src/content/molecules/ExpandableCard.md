given a layout this card becomes resizeable;

```react
const layout = [
  ["title"],
  ["title", "actions"],
  ["title", "body", "actions"]
];

const Section = ExpandableCard.Section;

<ExpandableCard layout={layout}>
  <Header section="title">Hello</Header>
  <Section section="body">Hi</Section>
  <Section section="actions">Bye</Section>
</ExpandableCard>
```

it can take an optional callback on resize

```react
const layout = [
  ["title"],
  ["title", "actions"],
  ["title", "body", "actions"]
];

const Section = ExpandableCard.Section;
const logJSON = obj => console.log(JSON.stringify(obj, null, 2));

<ExpandableCard layout={layout} onResize={logJSON}>
  <Header section="title">Hello</Header>
  <Section section="body">Hi</Section>
  <Section section="actions">Bye</Section>
</ExpandableCard>
```

you can set a default index (0 based)

```react
const layout = [
  ["title"],
  ["title", "actions"],
  ["title", "body", "actions"]
];

const Section = ExpandableCard.Section;
const logJSON = obj => console.log(JSON.stringify(obj, null, 2));

<ExpandableCard initialLevel={0} layout={layout} onResize={logJSON}>
  <Header section="title">Hello</Header>
  <Section section="body">Hi</Section>
  <Section section="actions">Bye</Section>
</ExpandableCard>
```

```react
const Section = ExpandableCard.Section;
const { CLOSEABLE } = affordances;
<ExpandableCard affordance={CLOSEABLE}>
  <Header section="title">Hello</Header>
  <Section section="body">Hi</Section>
  <Section section="actions">Bye</Section>
</ExpandableCard>
```

```react
state: { active: false }
---
const Section = ExpandableCard.Section;
const {INACTIVE, ACTIVE} = variants;
const { CHECKABLE } = affordances;
const toggleActive = () => setState({active: !state.active});
<ExpandableCard variant={state.active ? ACTIVE : INACTIVE} onIconClick={toggleActive} affordance={CHECKABLE}>
  <Header section="title">Hello</Header>
  <Section section="body">Hi</Section>
  <Section section="actions">Bye</Section>
</ExpandableCard>
```
