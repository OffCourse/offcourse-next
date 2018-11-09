The Menu molecule creates a list of available, clickable options in a defined sequence

```react
const onClick = () => alert("click");

const links = [
  { onClick, title: "Create Course", level: 0},
  { href: "/bla", title: "Admin", level: 2 },
  { href: "/bla", title: "Profile", level: 1 },
  { onClick, title: "Sign Out", level: 1}
];

<Menu links={links} />
```

Furthermore, the molecule can be used to define a maximum amount of displayed options, in this case just one

```react
const onClick = () => alert("click");

const links = [
  { onClick, title: "Create Course", level: 0},
  { href: "/bla", title: "Profile", level: 2 },
  { onClick, title: "Sign Out", level: 1}
];

const { HORIZONTAL } = directions;
<Menu maxLevel={0} links={links} direction={ HORIZONTAL }/>
```

A menu can also be displayed horizontally

```react
const onClick = () => alert("click");

const links = [
  { onClick, title: "Create Course", active: true, level: 0},
  { href: "/bla", title: "Profile", level: 2 },
  { onClick, title: "Sign Out", level: 1}
];

const { HORIZONTAL } = directions;
<Menu maxLevel={2} links={links} direction={ HORIZONTAL }/>
```
