The CourseCardLayout organism structures the cards when scrolling down

```react
state: {items: [1,2]}
---

const text = `
Lorem ipsum dolor amet small batch heirloom thundercats sartorial irony crucifix. Butcher locavore cloud bread humblebrag meh celiac hexagon biodiesel sustainable kale chips messenger bag. Ramps forage next level leggings, retro kale chips disrupt photo booth shaman farm-to-table cornhole neutra bicycle rights cred woke. Vexillologist cornhole vape, subway tile microdosing sartorial jianbing authentic biodiesel. Portland pop-up shabby chic gastropub mlkshk bushwick shoreditch before they sold out craft beer coloring book.
`;

const randInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createCourse = (fragment) => {
  return {
    courseId: "abc",
    goal: "Learn Something",
    curator: "Offcourse",
    courseUrl: "/yeehaa",
    profileUrl: `/curator/yeehaa`,
    checkpoints: [
      {
        checkpointId: "a",
        task: `Gentrify adipisicing fanny pack pabst, health goth excepteur ut sunt swag quo`,
        resourceUrl: "/"
      },
      {
        checkpointId: "b",
        task: "Do That",
        completed: true,
        resourceUrl: "/"
      },
      {
        checkpointId: "c",
        task: "Do More",
        resourceUrl: "/"
      }
    ],
    tags: ["tic", "tac", "toe"],
    description: fragment
  }
};

const createFragment = () => {
  return text.slice(randInt(0, 200), randInt(300,600)).trim();
};

const courses = state.items.map(()=> createCourse(createFragment()));

<CourseCardLayout
  hasMore={true}
  loadMore={() => {
    const items = [...state.items, ...[1,1,1]];
    setState({items});
  }}
  courses={courses}
/>
```
