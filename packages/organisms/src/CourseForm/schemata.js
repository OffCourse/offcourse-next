import { string, array, object } from "yup";

const checkpoint = object().shape({
  task: string()
    .min(5)
    .max(55)
    .required(),
  resourceUrl: string()
    .url()
    .required()
});

const course = object().shape({
  goal: string()
    .min(5)
    .max(55)
    .required(),
  checkpoints: array()
    .of(checkpoint)
    .min(1)
    .max(7)
    .required(),
  description: string()
    .min(10)
    .max(210)
});

export default {
  create: course,
  edit: course
};
