The SignInForm organism allows a user to sign in to the platform

```react|span-4
const handler = ({ userName }) => alert(`Good Job, ${userName}!`);
const errors = {};

<SignInForm
    errors={errors}
    onCancel={handler}
    onSubmit={handler}
    onRequestSignIn={handler}
/>
```
