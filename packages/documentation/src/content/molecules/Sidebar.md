This molecule creates the structure for a sidebar that can be either open or closed, depending on the state of the menu toggle

```react
state: { isOpen: false }
---
const toggle = () => setState({isOpen: !state.isOpen });
const close = () => setState({isOpen: false });

const MenuButton = Sidebar.MenuButton;
const CloseButton = Sidebar.CloseButton;

const links = [
  { onClick: toggle, title: "Create Course", level: 0 },
  { href: "/bla", title: "Admin", level: 2 },
  { href: "/bla", title: "Profile", level: 1 },
  { onClick: toggle, title: "Sign Out", level: 1 }
];

const content = <Menu links={links} />;

<div style={{height: "200px"}}>
  <Sidebar content={content} toggle={toggle} isOpen={state.isOpen}>
    <div style={{padding: "1rem"}}>
      <MenuButton onClick={toggle}/>
    </div>
  </Sidebar>
</div>
```
