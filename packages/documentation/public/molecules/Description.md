The Description molecule creates a designated section for a descriptive piece of text, in this case with a label prop

```react
<Description label="Course Description">
  Gentrify adipisicing fanny pack pabst, health goth excepteur ut sunt swag qui
  plaid tumeric letterpress. Wolf gentrify live-edge 8-bit. Af ut thundercats
  locavore williamsburg, blue bottle man braid viral
</Description>
```

Alternatively, the molecule can just be a simple wrapper

```react
const Label = Description.Label;
const Text = Description.Text;

<Description>
  <Label>Course Description</Label>
  <Text>
    Gentrify adipisicing fanny pack pabst, health goth excepteur ut sunt swag
    qui plaid tumeric letterpress. Wolf gentrify live-edge 8-bit. Af ut
    thundercats locavore williamsburg, blue bottle man braid viral
  </Text>
</Description>
```
