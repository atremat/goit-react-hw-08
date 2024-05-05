import { useId } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import css from "./LoginForm.module.css";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const signSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(16, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const loginInfo = {
      email: values.email.trim(),
      password: values.password.trim(),
    };
    console.log("logging");
    console.log(loginInfo);
    dispatch(login(loginInfo));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={signSchema}
    >
      <Form>
        <label htmlFor={emailFieldId}>Email</label>
        <Field type="email" name="email" id={emailFieldId} />
        <ErrorMessage name="email" component="p" className={css.error} />

        <label htmlFor={passwordFieldId}>Email</label>
        <Field type="password" name="password" id={passwordFieldId} />
        <ErrorMessage name="password" component="p" className={css.error} />

        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
