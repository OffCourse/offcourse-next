import yup from "yup";

const userName = yup
  .string()
  .min(4)
  .required();

const password = yup
  .string()
  .min(4)
  .required();

const normal = yup.object().shape({ userName, password });

export default { normal };
