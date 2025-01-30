import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { loginUser } from "../../redux/auth/operations";
import { Link, useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const FeedbackSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email") 
      .required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters") 
      .max(20, "Too Long!")
      .required("Required"),
  });

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    try {
      dispatch(loginUser(values)); 
      console.log("Submitting login:", values);
      actions.resetForm();
      
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
          <Form>
            <label>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />

            <label>Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />

            <button type="submit">Login</button>

            <p>
              Don't have an account yet? <Link to="/register">Register</Link>
            </p>
          </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
