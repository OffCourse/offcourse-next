import { object, string } from "yup";

export default object().shape({
  userName: string()
    .min(4)
    .required()
});
