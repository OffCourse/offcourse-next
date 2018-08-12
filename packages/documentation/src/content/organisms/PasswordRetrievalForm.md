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
