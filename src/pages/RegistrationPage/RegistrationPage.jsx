import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { SignUpUser } from "../../redux/auth/operations";
import { Link } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const RegistrationPage = () => {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      // .max(20, "Too Long!")
      .required("Required"),
  });

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    try {
      dispatch(SignUpUser(values)).unwrap();
      actions.resetForm();
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
          <Form>
            <label>User name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className="error" />

            <label>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />

            <label>Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />

            <button type="submit">Register</button>

            <p>
              Have an account? <Link className='text-teal-500' to="/login">Log in</Link>
            </p>
          </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;