The SignUpForm organism allows a user to sign-up to the platform

```react|span-4
const errors = {};
const userName = "";
const handler = ({ userName }) => alert(`Good Job, ${userName}!`);

<SignUpForm
  errors={errors}
  userName={userName}
  onSubmit={handler}
  onRequestSignIn={handler}
/>
```

Potentially, the process of signing up can make use of a confirmation code

```react|span-4
const errors = {};
const userName = "Someone";
const handler = ({ userName }) => alert(`Good Job, ${userName}!`);

<SignUpForm
  mode="confirm"
  errors={errors}
  userName={userName}
  onSubmit={handler}
  onRequestSignIn={handler}
/>
```
