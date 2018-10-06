A default message can be displayed in two different ways, either normal or basic

```react|span-3
<Message>This is a message</Message>
```

```react|span-3
<Message basic>This is a message</Message>
```

This feature can be exported as feature on success messages

```react|span-3
const { POSITIVE } = Message.variants;
<Message variant={ POSITIVE }>This is a success</Message>
```

```react|span-3
const { POSITIVE } = Message.variants;
<Message basic variant={ POSITIVE }>This is a success</Message>
```

Furthermore, error messages can also be displayed in these two ways

```react|span-3
const { NEGATIVE } = Message.variants;
<Message variant={ NEGATIVE }>This is an error</Message>
```

```react|span-3
const { NEGATIVE } = Message.variants;
<Message basic variant={ NEGATIVE }>This is an error</Message>
```

Info messages can have the this same distinction in display

```react|span-3
const { INFO } = Message.variants;
<Message variant={ INFO }>This is an info</Message>
```

```react|span-3
const { INFO } = Message.variants;
<Message basic variant={ INFO }>This is an info</Message>
```

The same goes for warning messages

```react|span-3
const { WARNING } = Message.variants;
<Message variant={ WARNING }>This is a warning</Message>
```

```react|span-3
const { WARNING } = Message.variants;
<Message basic variant={ WARNING }>This is a warning</Message>
```
