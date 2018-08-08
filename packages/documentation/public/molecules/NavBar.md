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

<NavBar position="absolute" onLogoClick={onClick} onMenuButtonClick={onClick} links={links} />
```

With Messages

```react
const Logo = NavBar.Logo;
const MenuButton = NavBar.MenuButton;
const onClick = () => alert("click");

const messages = [
  { variant: "error", message: "HELLO" },
  { variant: "warning", message: "HELLO" },
  { variant: "success", message: "Hello"}
];
const links = [
  { onClick, title: "Create Course", level: 2 },
  { href: "/bla", title: "Admin", level: 3 },
  { onClick, title: "Sign Out", level: 1 },
  { href: "/bla", title: "Profile", level: 1 }
];

<NavBar messages={messages} position="absolute" onLogoClick={onClick} onMenuButtonClick={onClick} links={links} />
```
