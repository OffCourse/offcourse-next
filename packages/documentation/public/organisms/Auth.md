This organism allows a user to sign-in or sign-up, in case the user never did before

```react
const handler = message => alert(JSON.stringify(message, null, 2));

<Auth signIn={handler} initialUserName="yeehaa" onModeSwitch={handler} onCancel={handler} signUp={handler} resetPassword={handler} />
```
