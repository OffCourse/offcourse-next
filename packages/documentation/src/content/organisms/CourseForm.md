```react|span-4
state: { errors: { general: "you seem to have misspelled something..."} }
---
const submitHandler = (values, actions) => {
  setState(
    {
      errors: {
        general: "you seem to have misspelled something..."
      }
    },
    actions.setSubmitting(false)
  );
};

const handler = () => alert("Everyting is Erased!!!!");

<CourseForm
  errors={state.errors}
  onSubmit={submitHandler}
  onCancel={handler}
/>
```

```react|span-4
state: { errors: {} }
---
const submitHandler = (values, actions) => {
  setState(
    {
      errors: {
        general: "you seem to have misspelled something..."
      }
    },
    actions.setSubmitting(false)
  );
};

const course = {
  courseId: "abc",
  goal: "learn this",
  checkpoints: [
    {
      checkpointId: "a",
      task: "do this",
      resourceUrl: "https://github.com/jaredpalmer/formik"
    },
    {
      checkpointId: "b",
      task: "do that",
      resourceUrl: "https://github.com/jquense/yup"
    },
    {
      checkpointId: "c",
      completed: true,
      task: "do more",
      resourceUrl: "https://semantic-ui.com/collections/form.html"
    }
  ],
  description: `Gentrify adipisicing fanny pack pabst, health goth excepteur ut sunt swag qui plaid tumeric letterpress. Wolf gentrify live-edge 8-bit. Af ut thundercats locavore williamsburg, blue bottle man braid viral`
};

const handler = () => alert("Everyting is Erased!!!!");

<CourseForm
  mode="edit"
  course={course}
  errors={state.errors}
  onSubmit={submitHandler}
  onCancel={handler}
/>
```
