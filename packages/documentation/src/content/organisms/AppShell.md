The AppShell organism forms the main structure of the platform

Feature without messages

```react|dark
state: { isSidebarOpen: false, isSearchBarOpen: false}
---
const toggle = () => setState({isOpen: !state.isSidebarOpen });
const links = [
  { onClick: toggle, title: "Create Course", level: 0 },
  { href: "/bla", title: "Admin", level: 3 },
  { href: "/bla", title: "Profile", level: 2 },
  { onClick: toggle, title: "Sign Out", level: 2 }
];
const onSearchClick = () => setState({ isSearchBarOpen: !state.isSearchBarOpen});

<div style={{height: "200px"}}>
  <AppShell isSearchBarOpen={state.isSearchBarOpen} toggleSearchBar={onSearchClick} isDocked={false} onLogoClick={toggle} toggleSidebar={toggle} isSidebarOpen={state.isSidebarOpen} links={links}>
    <h1 style={{color: "white", paddingLeft: "1rem"}}>This is the area where the content is rendered...</h1>
  </AppShell>
</div>
```

Feature with messages

```react|dark
state: { isSidebarOpen: false }
---
const toggle = () => setState({isOpen: !state.isSidebarOpen });
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
const onSearchClick = () => setState({ isSearchBarOpen: !state.isSearchBarOpen});

<div style={{height: "200px"}}>
  <AppShell isSearchBarOpen={state.isSearchBarOpen} toggleSearchBar={onSearchClick} messages={messages} isDocked={false} onLogoClick={toggle} toggleSidebar={toggle} isSidebarOpen={state.isSidebarOpen} links={links}>
    <h1 style={{color: "white", paddingLeft: "1rem"}}>This is the area where the content is rendered...</h1>
  </AppShell>
</div>
```
