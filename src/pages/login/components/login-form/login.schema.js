import * as Yup from "yup";



export const loginSchema = Yup.object().shape({
  login: Yup.string()
    .required()
    .min(2)
    .max(80),
  password: Yup.string()
    .required()
    .min(6)
    .max(30),
});
