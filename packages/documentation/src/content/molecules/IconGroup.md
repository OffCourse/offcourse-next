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
const  { SMALL } = sizes;
const icons = [
  {name: "eye", onClick: handleClick},
  {name: "remove", onClick: handleClick},
  {name: "add", onClick: handleClick},
];

<IconGroup size={ SMALL } icons={icons}/>
```

```react|span-3
const handleClick = () => alert("clicked");
const  { NORMAL } = sizes;
const icons = [
  {name: "eye", onClick: handleClick},
  {name: "remove", onClick: handleClick},
  {name: "add", onClick: handleClick},
];

<IconGroup size={ NORMAL } icons={icons}/>
```

```react|span-6
const handleClick = () => alert("clicked");
const  { LARGE } = sizes;
const icons = [
  {name: "eye", onClick: handleClick},
  {name: "remove", onClick: handleClick},
  {name: "add", onClick: handleClick},
];

<IconGroup size={ LARGE } icons={icons}/>
```

```react|span-6
const handleClick = () => alert("clicked");
const { EXTRA_LARGE } = sizes;

const icons = [
  {name: "eye", onClick: handleClick},
  {name: "remove", onClick: handleClick},
  {name: "add", onClick: handleClick},
];

<IconGroup size={ EXTRA_LARGE } icons={icons}/>
```

Lastly, icons can be vertically displayed as well

```react|span-6
const handleClick = () => alert("clicked");
const { EXTRA_LARGE } = sizes;
const { VERTICAL } = directions;

const icons = [
  {name: "eye", onClick: handleClick},
  {name: "remove", onClick: handleClick},
  {name: "add", onClick: handleClick},
];

<IconGroup direction= { VERTICAL } size={ EXTRA_LARGE } icons={icons}/>
```
