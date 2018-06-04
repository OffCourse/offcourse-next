import yup from "yup";

export default yup.object().shape({
  userName: yup
    .string()
    .min(4)
    .required()
});
