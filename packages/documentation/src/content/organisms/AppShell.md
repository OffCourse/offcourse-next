The AppShell organism forms the main structure of the platform

Feature without messages

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
  <AppShell isDocked={false} onLogoClick={toggle} toggleSidebar={toggle} isSidebarOpen={state.isOpen} links={links}>
    <h1 style={{color: "white", paddingLeft: "1rem"}}>This is the area where the content is rendered...</h1>
  </AppShell>
</div>
```

Feature with messages

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

const { NEGATIVE, WARNING, POSITIVE } = variants;

const messages = [
  { variant: NEGATIVE, message: "HELLO" },
  { variant: WARNING, message: "HELLO" },
  { variant: POSITIVE, message: "Hello"}
];

<div style={{height: "200px"}}>
  <AppShell messages={messages} isDocked={false} onLogoClick={toggle} toggleSidebar={toggle} isSidebarOpen={state.isOpen} links={links}>
    <h1 style={{color: "white", paddingLeft: "1rem"}}>This is the area where the content is rendered...</h1>
  </AppShell>
</div>
```
