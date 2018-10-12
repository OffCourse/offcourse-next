Component that facilitates infinite lists

```react
state: {
  index: 0,
  hasMore: true,
  items: [
"Lorem ipsum dolor amet small batch heirloom thundercats sartorial irony crucifix. Butcher locavore cloud bread humblebrag meh celiac hexagon biodiesel sustainable kale chips messenger bag. Ramps forage next level leggings, retro kale chips disrupt photo booth shaman farm-to-table cornhole neutra bicycle rights cred woke. Vexillologist cornhole vape, subway tile microdosing sartorial jianbing authentic biodiesel. Portland pop-up shabby chic gastropub mlkshk bushwick shoreditch before they sold out craft beer coloring book.",

"Vexillologist cornhole vape, subway tile microdosing sartorial jianbing authentic biodiesel. Portland pop-up shabby chic gastropub mlkshk bushwick shoreditch before they sold out craft beer coloring book.",

"Ramps forage next level leggings, retro kale chips disrupt photo booth shaman farm-to-table cornhole neutra bicycle rights cred woke. Vexillologist cornhole vape, subway tile microdosing sartorial jianbing authentic biodiesel. Portland pop-up shabby chic gastropub mlkshk bushwick shoreditch before they sold out craft beer coloring book.",

"Butcher locavore cloud bread humblebrag meh celiac hexagon biodiesel sustainable kale chips messenger bag. Ramps forage next level leggings, retro kale chips disrupt photo booth shaman farm-to-table cornhole neutra bicycle rights cred woke. Vexillologist cornhole vape, subway tile microdosing sartorial jianbing authentic biodiesel. Portland pop-up shabby chic gastropub mlkshk bushwick shoreditch before they sold out craft beer coloring book.",
]}
---
const Button = ButtonGroup.Button;
const { SMALL, LARGE } = sizes;
const { WARNING } = variants;

const text = `
Lorem ipsum dolor amet small batch heirloom thundercats sartorial irony crucifix. Butcher locavore cloud bread humblebrag meh celiac hexagon biodiesel sustainable kale chips messenger bag. Ramps forage next level leggings, retro kale chips disrupt photo booth shaman farm-to-table cornhole neutra bicycle rights cred woke. Vexillologist cornhole vape, subway tile microdosing sartorial jianbing authentic biodiesel. Portland pop-up shabby chic gastropub mlkshk bushwick shoreditch before they sold out craft beer coloring book.
`;

const randInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createFragment = () => {
  return text.slice(randInt(0, 200), randInt(300,600)).trim();
};

const createFragments = () => { return [0,1,2,3,4,5].map(createFragment) };

const loadMore = () =>  {
  if (state.index < 3) {
    setTimeout(
      () => { setState({index: state.index + 1, hasMore: true, items: [...state.items, ...createFragments()]}) },
      300
    )
  } else {
    setState({index: state.index + 1, hasMore: false, items: [...state.items, ...createFragments()]})
  }
};


<InfiniteScroll height="500px" hasMore={state.hasMore} loadMore={loadMore}>
  <List>
    {state.items.map((text, index) => {
      return <List.Item key={index}>{text}</List.Item>
    })}
  </List>
</InfiniteScroll>
```
