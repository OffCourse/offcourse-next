This organism permits a sign-in or sign-up dialogue, when a user is on the platform

```react
const handler = message => alert(JSON.stringify(message, null, 2));

<Auth signIn={handler} initialUserName="yeehaa" onModeSwitch={handler} onCancel={handler} signUp={handler} resetPassword={handler} />
```
