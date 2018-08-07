This organism can be used by a user to retrieve a lost password

```react|span-4
const errors = {};
const userName = "";
const handler = () => alert("Done!");

<PasswordRetrievalForm
  errors={errors}
  userName={userName}
  onSubmit={handler}
  onCancel={handler}
  onRequestSignIn={handler}
/>
```

Potentially, the process of retrieving a lost password can make use of a confirmation code

```react|span-4
const confirmMode = true;
const errors = {};
const userName = "Someone";
const handler = () => alert("Done!");

<PasswordRetrievalForm
  mode="confirm"
  errors={errors}
  userName={userName}
  onSubmit={handler}
  onCancel={handler}
  onRequestSignIn={handler}
/>
```
