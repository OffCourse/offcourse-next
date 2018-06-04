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

```react
const onClick = () => alert("click");

const links = [
  { onClick, title: "Create Course", level: 0},
  { href: "/bla", title: "Profile", level: 2 },
  { onClick, title: "Sign Out", level: 1}
];

<Menu maxLevel={0} links={links} direction="horizontal"/>
```
