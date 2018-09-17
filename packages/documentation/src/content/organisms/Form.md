Basic Form

```react|span-4
const onSubmit = (values, actions) => {
  alert(JSON.stringify(values, null, 2));
  actions.setSubmitting(false)
};

const onCancel = () => alert("Everyting is Erased!!!!");

const yup = Form.yup;

class Model {
  static schemata = {
    normal: yup.object().shape({
      testField: yup.string().min(5).max(8).required()
    })
  };


  constructor({ testField = ""}){
    this.testField = testField;
  }
}

const values = { testField: "abc"}

const Field = Form.Field;
<Form
  values={values}
  Model={Model}
  title="Test Form"
  onSubmit={onSubmit}
  onCancel={onCancel}
>
  <Field title="Test Field" name="testField" placeholder="Test" />
</Form>
```

Pimped Out Form

```react|span-4
state: { errors: {}}
---

const errors = {general: "you seem to have misspelled something..."};
const testItems1 = [{task: "aaaa", resourceUrl: "bbb"}, {task: "", resourceUrl: ""}];
const testItems2 = ["aaaaa", "bbbb"];

const onSubmit = (values, actions) => {
  alert(JSON.stringify(values, null, 2));
  setState({errors}),
  actions.setSubmitting(true)
};


const onCancel = () => alert("Everyting is Erased!!!!");
const values = {
  testField: "ab",
  testItems: testItems2
};

const buttons = {
  warning: {
    title: "Maybe...",
    variant: "warning",
    onClick: () => confirm("are you sure"),
    size: "small"
  },
  cancel: {
    title: "HELL NO",
    size: "medium"
  },
  submit: {
    title: "Okay",
    size: "small"
  }
};

const linkData = [
  { onClick: onCancel, title: "Go Somewhere Else" },
  { onClick: onCancel, title: "Go Someplace Other" }
];

const yup = Form.yup;
class Model {
  static schemata = {
    normal: yup.object().shape({
      testField: yup.string().min(5).max(8).required(),
      testItems: yup.array().of(yup.string().min(3)).min(2).max(3).required()
    })
  };

  constructor({ testField = "", testItems = [""]}){
    this.testField = testField;
    this.testItems = testItems;
  }
}

const Field = Form.Field;
const FieldList = Form.FieldList;
<Form
  values={values}
  Model={Model}
  errors={state.errors}
  title="Test Form"
  links={linkData}
  buttons={buttons}
  onSubmit={onSubmit}
  onCancel={onCancel}
>
  <Field title="Test Field" name="testField" placeholder="Test" />
  <FieldList title="Test Items" name="testItems"/>
</Form>
```
