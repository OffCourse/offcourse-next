Headers and Different States

```react|span-3
<Header>Hello</Header>
```

```react|span-3
const { INACTIVE } = variants;
const { SHRINKABLE } = affordances;
<Header variant={INACTIVE} affordance={SHRINKABLE}>Hello</Header>
```

```react|span-3
const { CHECKABLE } = affordances;
<Header affordance={CHECKABLE}>This is a long header to test it out with long lines</Header>
```

```react|span-3
const { CLOSEABLE } = affordances;
<Header affordance={CLOSEABLE}>HELLO</Header>
```

```react|span-3
const { EXPANDABLE } = affordances;
<Header affordance={EXPANDABLE}>Hello</Header>
```

```react|span-3
const { SHRINKABLE } = affordances;
<Header affordance={SHRINKABLE}>Hello</Header>
```

```react|span-3,dark
const { CHECKABLE } = affordances;
const breadcrumbs = [
    { text: "Go Here",
      onClick: () => console.log("x")
    }
];
<Header bg="white" breadcrumbs={breadcrumbs} affordance={CHECKABLE}>This is a long header to test it out with long lines</Header>
```

```react|span-3,dark
const { CHECKABLE } = affordances;
const breadcrumbs = [
    { text: "Go Here",
      onClick: () => console.log("x")
    }
];
<Header bg="grayScale.1" breadcrumbs={breadcrumbs} affordance={CHECKABLE}>This is a long header to test it out with long lines</Header>
```

```react|span-3,dark
const { CHECKABLE } = affordances;
<Header bg="white" p={8} affordance={CHECKABLE}>This is a long header to test it out with long lines</Header>
```

```react|span-3,dark
const { CHECKABLE } = affordances;
const breadcrumbs = [
    { text: "Go Here",
      onClick: () => console.log("x")
    }
];
<Header bg="grayScale.1" p={8} breadcrumbs={breadcrumbs} affordance={CHECKABLE}>This is a long header to test it out with long lines</Header>
```
