```react|span-4
const errors = {};
const userName = "";
const handler = () => alert("Done!");

<SignUpForm
  errors={errors}
  userName={userName}
  onSubmit={handler}
  onRequestSignIn={handler}
/>
```

```react|span-4
const errors = {};
const userName = "Someone";
const handler = () => alert("Done!");

<SignUpForm
  mode="confirm"
  errors={errors}
  userName={userName}
  onSubmit={handler}
  onRequestSignIn={handler}
/>
```
