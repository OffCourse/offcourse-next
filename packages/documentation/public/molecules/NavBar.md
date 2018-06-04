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
