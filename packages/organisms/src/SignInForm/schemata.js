import { string, object } from "yup";

const userName = string()
  .min(4)
  .required();

const password = string()
  .min(4)
  .required();

const normal = object().shape({ userName, password });

export default { normal };
