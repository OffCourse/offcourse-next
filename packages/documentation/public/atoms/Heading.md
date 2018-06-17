Heading can have a normal size

```react
<Heading>Regular Heading</Heading>
```

They can be small

```react
<Heading size="small">Small Heading</Heading>
```

They can link to another reference

```react
<Heading href="/">Reference Heading</Heading>
```

Or they can have a custom click handler

```react
<Heading href="/" onClick={({href}) => alert(href)}>Click Heading</Heading>
```
