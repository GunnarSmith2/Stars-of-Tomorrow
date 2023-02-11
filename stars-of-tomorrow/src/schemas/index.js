import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit

export const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message: "Password is weak, create a stronger password",
    })
    .required("required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null, "Passwords must match"])
    .required("required"),
  scoutId: yup.string().required("required"),
});

export const loginSchema = yup.object().shape({
  scoutId: yup.string().required("required"),
  password: yup.string().required("required"),
});
