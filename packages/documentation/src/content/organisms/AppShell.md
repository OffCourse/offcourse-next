The AppShell organism forms the main structure of the platform

Feature without messages

```react|dark
state: { isSidebarOpen: false, isSearchBarOpen: false}
---
const toggle = () => setState({isSidebarOpen: !state.isSidebarOpen });
const links = [
  { onClick: toggle, title: "Create Course", level: 0 },
  { href: "/bla", title: "Admin", level: 3 },
  { href: "/bla", title: "Profile", level: 2 },
  { onClick: toggle, title: "Sign Out", level: 2 }
];
const onSearchClick = () => setState({ isSearchBarOpen: !state.isSearchBarOpen});
const closeSearchBar = () => setState({isSearchBarOpen: false});
const closeSidebar = () => setState({isSidebarOpen: false});

<div style={{height: "200px"}}>
  <AppShell closeSidebar={closeSidebar} closeSearchBar={closeSearchBar} isSearchBarOpen={state.isSearchBarOpen} toggleSearchBar={onSearchClick} isDocked={false} onLogoClick={toggle} toggleSidebar={toggle} isSidebarOpen={state.isSidebarOpen} links={links}>
    <h1 style={{color: "white", paddingLeft: "1rem"}}>This is the area where the content is rendered...</h1>
  </AppShell>
</div>
```

Feature with messages

```react
state: { isSidebarOpen: true, isSearchBarOpen: false}
---
const links = [
  { href: "/bla", title: "Admin", level: 3 },
  { href: "/bla", title: "Profile", level: 2 },
];

const { NEGATIVE, WARNING, POSITIVE } = variants;

const messages = [
  { variant: NEGATIVE, message: `${state.isSidebarOpen}`},
  { variant: WARNING, message: `${state.isSearchBarOpen}`},
  { variant: POSITIVE, message: "Hello"}
];
const closeSearchBar = () => setState({isSearchBarOpen: false})
const onSearchClick = () => setState({isSearchBarOpen: !state.isSearchBarOpen});
const toggleSidebar= () => setState({isSidebarOpen: !state.isSidebarOpen });
const closeSidebar = () => setState({isSidebarOpen: false});

<div style={{height: "200px"}}>
<h1>{state.isSidebarOpen}</h1>
  <AppShell closeSearchBar={closeSearchBar} isSearchBarOpen={state.isSearchBarOpen} toggleSearchBar={onSearchClick} messages={messages} isDocked={false} onLogoClick={null} toggleSidebar={toggleSidebar} closeSidebar={closeSidebar} isSidebarOpen={state.isSidebarOpen} links={links}>
    <h1 style={{color: "white", paddingLeft: "1rem"}}>This is the area where the content is rendered...</h1>
  </AppShell>
</div>
```
