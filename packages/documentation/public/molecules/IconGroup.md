The IconGroup molecule can be used to explicitly declare icons

```react
const handleClick = () => alert("clicked");
const Icon = IconGroup.Icon;

<IconGroup>
  <Icon name="sort" onClick={handleClick}/>
  <Icon name="twitter" onClick={handleClick}/>
  <Icon name="hamburger" onClick={handleClick}/>
</IconGroup>
```

Or it can pass the icons data as a prop

```react
const handleClick = () => alert("clicked");
const icons = [
  {name: "eye", onClick: handleClick},
  {name: "remove", onClick: handleClick},
  {name: "add", onClick: handleClick},
];

<IconGroup icons={icons}/>
```

It can have different sizes

```react|span-3
const handleClick = () => alert("clicked");
const icons = [
  {name: "eye", onClick: handleClick},
  {name: "remove", onClick: handleClick},
  {name: "add", onClick: handleClick},
];

<IconGroup size="small" icons={icons}/>
```

```react|span-3
const handleClick = () => alert("clicked");
const icons = [
  {name: "eye", onClick: handleClick},
  {name: "remove", onClick: handleClick},
  {name: "add", onClick: handleClick},
];

<IconGroup size="medium" icons={icons}/>
```

Lastly, icons can be vertically displayed as well

```react|span-6
const handleClick = () => alert("clicked");
const icons = [
  {name: "eye", onClick: handleClick},
  {name: "remove", onClick: handleClick},
  {name: "add", onClick: handleClick},
];

<IconGroup size="large" icons={icons}/>
```

```react|span-6
const handleClick = () => alert("clicked");
const icons = [
  {name: "eye", onClick: handleClick},
  {name: "remove", onClick: handleClick},
  {name: "add", onClick: handleClick},
];

<IconGroup direction="vertical" size="large" icons={icons}/>
```
