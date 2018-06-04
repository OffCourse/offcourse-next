import yup from "yup";

const checkpoint = yup.object().shape({
  task: yup
    .string()
    .min(5)
    .max(55)
    .required(),
  resourceUrl: yup
    .string()
    .url()
    .required()
});

const course = yup.object().shape({
  goal: yup
    .string()
    .min(5)
    .max(55)
    .required(),
  checkpoints: yup
    .array()
    .of(checkpoint)
    .min(1)
    .max(7)
    .required(),
  description: yup
    .string()
    .min(10)
    .max(210)
});

export default {
  create: course,
  edit: course
};
