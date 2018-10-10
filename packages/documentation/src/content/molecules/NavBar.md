This molecule combines the Offcourse logo with the menu button and onClick functionalities

Without Messages

```react
const Logo = NavBar.Logo;
const MenuButton = NavBar.MenuButton;
const onClick = () => alert("click");

const links = [
  { onClick, title: "Create Course", level: 2 },
  { href: "/bla", title: "Admin", level: 3 },
  { onClick, title: "Sign Out", level: 1 },
  { href: "/bla", title: "Profile", level: 1 }
];

<NavBar isDocked={false} onLogoClick={onClick} onMenuButtonClick={onClick} links={links} />
```

With SearchBar

```react
state: { isSearchBarOpen: false}
---

const Logo = NavBar.Logo;
const MenuButton = NavBar.MenuButton;
const onSearchClick = () => setState({ isSearchBarOpen: !state.isSearchBarOpen});
const onClick = () => alert("click");

const { NEGATIVE, WARNING, POSITIVE } = variants;

const links = [
{ onClick, title: "Create Course", level: 2 },
{ href: "/bla", title: "Admin", level: 3 },
{ onClick, title: "Sign Out", level: 1 },
{ href: "/bla", title: "Profile", level: 1 }
];

<NavBar isDocked={false} onSearchButtonClick={onSearchClick} isSearchBarOpen={state.isSearchBarOpen} onLogoClick={onClick} onMenuButtonClick={onClick} links={links} />
```

With Messages

```react
const Logo = NavBar.Logo;
const MenuButton = NavBar.MenuButton;
const onClick = () => alert("click");

const { NEGATIVE, WARNING, POSITIVE } = variants;

const messages = [
  { variant: NEGATIVE, message: "HELLO" },
  { variant: WARNING, message: "HELLO" },
  { variant: POSITIVE, message: "Hello"}
];
const links = [
  { onClick, title: "Create Course", level: 2 },
  { href: "/bla", title: "Admin", level: 3 },
  { onClick, title: "Sign Out", level: 1 },
  { href: "/bla", title: "Profile", level: 1 }
];

<NavBar isDocked={false} messages={messages} onLogoClick={onClick} onMenuButtonClick={onClick} links={links} />
```
