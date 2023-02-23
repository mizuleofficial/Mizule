import * as Yup from "yup";
export const signUpValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: Yup.string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .min(8, ({ min }) => `Confirm password must be at least ${min} characters`)
    .matches(/[0-9]/, "Confirm password requires a number")
    .matches(/[a-z]/, "Confirm password requires a lowercase letter")
    .matches(/[A-Z]/, "Confirm password requires an uppercase letter")
    .matches(/[^\w]/, "Confirm password requires a symbol")
    .oneOf([Yup.ref("password"), null], "Confirm password does not match")
    .required("Password is required"),
});
export const SignInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: Yup.string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
    .required("Password is required"),
});
