```react|span-6
responsive: true
state: {items: [1,2,3,4]}
---
const text = `
Lorem ipsum dolor amet small batch heirloom thundercats sartorial irony crucifix. Butcher locavore cloud bread humblebrag meh celiac hexagon biodiesel sustainable kale chips messenger bag. Ramps forage next level leggings, retro kale chips disrupt photo booth shaman farm-to-table cornhole neutra bicycle rights cred woke. Vexillologist cornhole vape, subway tile microdosing sartorial jianbing authentic biodiesel. Portland pop-up shabby chic gastropub mlkshk bushwick shoreditch before they sold out craft beer coloring book.
`;

const randInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createFragment = () => {
  return text.slice(randInt(0, 200), randInt(300,600)).trim();
};

const fragments = state.items.map(createFragment);

const breakpoints = [624, 928];

<Masonry breakpoints={breakpoints}>
{ fragments.map((fragment, index) => (
  <Card key={index}>
    <Heading size="small" section="title">
      {`Masonry Example ${index + 1}`}
    </Heading>
    <Group section="body">
      <Text size="small">{fragment}</Text>
    </Group>
    <Button size="large" variant="warning" onClick={
      () => {
        const items = [...state.items];
        items.push(1);
        setState({items});
      }
      }>Add Item</Button>
  </Card>
)) }
</Masonry>
```
