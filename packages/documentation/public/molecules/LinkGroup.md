The LinkGroup molecule can be used to explicitly declare links

```react
const clickHandler = () => alert("ALERT");
const Link = LinkGroup.Link;

<LinkGroup spacing="none" direction="vertical">
  <Link onClick={clickHandler}>Click Me</Link>

  <Link disabled onClick={clickHandler}>
    Cannot Click
  </Link>

  <Link href="/">Follow Me</Link>

  <Link disabled href="/">
    Cannot Follow
  </Link>
</LinkGroup>;
```

Or it can pass the link data as a prop

```react
const onClick = () => alert("click");
const links = [
  { onClick, title: "Create Course" },
  { href: "/bla", active: true, title: "Profile" },
  { onClick, title: "Sign Out" }
];
<LinkGroup links={links} />;
```
