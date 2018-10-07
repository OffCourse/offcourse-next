The MessageGroup molecule can explicitly declare messages

```react
const Message = MessageGroup.Message;
const { INFO, POSITIVE, WARNING, NEGATIVE } = MessageGroup.variants;
<MessageGroup>
  <Message>This is a message</Message>
  <Message variant={ NEGATIVE }>This is an error</Message>
  <Message variant={ INFO }>This is an info</Message>
  <Message variant={ WARNING }>This is a warning</Message>
  <Message variant={ POSITIVE }>This is a success</Message>
</MessageGroup>
```

Or it can pass the messages data as a prop

```react
const { INFO, POSITIVE, WARNING, NEGATIVE } = MessageGroup.variants;
const messages = [
  { variant: NEGATIVE, message: "error" },
  { variant: INFO, message: "info" },
  { variant: WARNING, message: "warning" },
  { variant: POSITIVE, message: "success" }
];
<MessageGroup messages={messages} />;
```

Messages can be basic

```react
const { INFO, POSITIVE, WARNING, NEGATIVE } = MessageGroup.variants;
const messages = [
  { variant: NEGATIVE, message: "error" },
  { variant: INFO, message: "info" },
  { variant: WARNING, message: "warning" },
  { variant: POSITIVE, message: "success" }
];
<MessageGroup basic messages={messages} />;
```

Errors have their own shortcut

```react
const errors = ["This...", "Is....", "Going Down...", "Fast"];
const messages = MessageGroup.formatMessages(errors);
<MessageGroup basic messages={messages} />;
```
