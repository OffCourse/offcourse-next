```react
state: { isSearchBarOpen: false}
---

const Logo = NavBar.Logo;
const onClick = () => alert("click");

<NavBar onSearchButtonClick={onClick} isSearchBarOpen={state.isSearchBarOpen} onLogoClick={onClick} onMenuButtonClick={onClick} />
```
