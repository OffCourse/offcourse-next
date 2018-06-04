```react
const handler = message => alert(JSON.stringify(message, null, 2));

<Auth signIn={handler} initialUserName="yeehaa" signUp={handler} resetPassword={handler} />
```
