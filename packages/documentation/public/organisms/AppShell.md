without messages

```react|dark
state: { isOpen: false }
---
const toggle = () => setState({isOpen: !state.isOpen });
const links = [
  { onClick: toggle, title: "Create Course", level: 0 },
  { href: "/bla", title: "Admin", level: 3 },
  { href: "/bla", title: "Profile", level: 2 },
  { onClick: toggle, title: "Sign Out", level: 2 }
];

<div style={{height: "200px"}}>
  <AppShell position="absolute" onLogoClick={toggle} toggleSidebar={toggle} isSidebarOpen={state.isOpen} links={links}>
    <h1 style={{color: "white", paddingLeft: "1rem"}}>This is the area where the content is rendered...</h1>
  </AppShell>
</div>
```

with messages

```react|dark
state: { isOpen: false }
---
const toggle = () => setState({isOpen: !state.isOpen });
const links = [
  { onClick: toggle, title: "Create Course", level: 1 },
  { href: "/bla", title: "Admin", level: 3 },
  { href: "/bla", title: "Profile", level: 2 },
  { onClick: toggle, title: "Sign Out", level: 2 }
];

const messages = [
  { variant: "error", message: "HELLO" },
  { variant: "warning", message: "HELLO" },
  { variant: "success", message: "Hello"}
];

<div style={{height: "200px"}}>
  <AppShell messages={messages} position="absolute" onLogoClick={toggle} toggleSidebar={toggle} isSidebarOpen={state.isOpen} links={links}>
    <h1 style={{color: "white", paddingLeft: "1rem"}}>This is the area where the content is rendered...</h1>
  </AppShell>
</div>
```
