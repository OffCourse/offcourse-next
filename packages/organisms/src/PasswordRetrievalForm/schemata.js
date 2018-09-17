import { string, object } from "yup";

const userName = string()
  .min(4)
  .matches(/^[a-z]+$/, "user name cannot have spaces or special characters")
  .strict()
  .required();

const password = string()
  .min(8)
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/,
    "password must have at least one uppercase letter, one lowercase letter, one number and one special character"
  )
  .required();

const confirmationCode = string()
  .min(6)
  .max(12)
  .matches(/^\d+$/, "confirmation code can only contain numbers")
  .required();

const normal = object().shape({ userName });
const confirm = object().shape({ userName, password, confirmationCode });

export default {
  normal,
  confirm
};
