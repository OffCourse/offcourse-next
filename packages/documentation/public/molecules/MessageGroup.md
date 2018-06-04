MessageGroup can explicity declare messages

```react
const Message = MessageGroup.Message;
<MessageGroup>
  <Message>This is a message</Message>
  <Message variant="error">This is an error</Message>
  <Message variant="info">This is an info</Message>
  <Message variant="warning">This is a warning</Message>
  <Message variant="success">This is a success</Message>
</MessageGroup>
```

Or it can pass the messages data as a prop

```react
const messages = [
  { variant: "error", message: "error" },
  { variant: "info", message: "info" },
  { variant: "warning", message: "warning" },
  { variant: "success", message: "success" }
];
<MessageGroup messages={messages} />;
```

Messages can be basic

```react
const messages = [
  { variant: "error", message: "error" },
  { variant: "info", message: "info" },
  { variant: "warning", message: "warning" },
  { variant: "success", message: "success" }
];
<MessageGroup basic messages={messages} />;
```

Errors have their own shortcut

```react
const errors = ["This...", "Is....", "Going Down...", "Fast"];
<MessageGroup basic errors={errors} />;
```
