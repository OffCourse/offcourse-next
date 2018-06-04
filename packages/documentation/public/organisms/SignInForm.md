```react|span-4
const handler = () => alert("Done!");
const errors = {};

<SignInForm
    errors={errors}
    onCancel={handler}
    onSubmit={handler}
    onRequestSignIn={handler}
/>
```
