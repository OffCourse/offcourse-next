import yup from "yup";

const userName = yup
  .string()
  .min(4)
  .matches(/^[a-z]+$/, "user name cannot have spaces or special characters")
  .strict()
  .required();

const email = yup
  .string()
  .email()
  .required();

const password = yup
  .string()
  .min(8)
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/,
    "password must have at least one uppercase letter, one lowercase letter, one number and one special character"
  )
  .required();

const confirmationCode = yup
  .string()
  .min(6)
  .max(12)
  .matches(/^\d+$/, "confirmation code can only contain numbers")
  .required();

const normal = yup.object().shape({ userName, email, password });
const confirm = yup
  .object()
  .shape({ userName, email, password, confirmationCode });

export default {
  normal,
  confirm
};
