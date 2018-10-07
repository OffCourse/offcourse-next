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
const  { SMALL } = IconGroup.sizes;
const icons = [
  {name: "eye", onClick: handleClick},
  {name: "remove", onClick: handleClick},
  {name: "add", onClick: handleClick},
];

<IconGroup size={ SMALL } icons={icons}/>
```

```react|span-3
const handleClick = () => alert("clicked");
const  { NORMAL } = IconGroup.sizes;
const icons = [
  {name: "eye", onClick: handleClick},
  {name: "remove", onClick: handleClick},
  {name: "add", onClick: handleClick},
];

<IconGroup size={ NORMAL } icons={icons}/>
```

Lastly, icons can be vertically displayed as well

```react|span-6
const handleClick = () => alert("clicked");
const  { LARGE } = IconGroup.sizes;
const icons = [
  {name: "eye", onClick: handleClick},
  {name: "remove", onClick: handleClick},
  {name: "add", onClick: handleClick},
];

<IconGroup size={ LARGE } icons={icons}/>
```

```react|span-6
const handleClick = () => alert("clicked");
const { LARGE } = IconGroup.sizes;
const { VERTICAL } = IconGroup.directions;

const icons = [
  {name: "eye", onClick: handleClick},
  {name: "remove", onClick: handleClick},
  {name: "add", onClick: handleClick},
];

<IconGroup direction= { VERTICAL } size={ LARGE } icons={icons}/>
```
