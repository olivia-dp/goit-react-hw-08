import { Formik, Form, Field } from "formik"
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { loginUser } from "../../redux/auth/operations";


const initialValues = {
    name: "",
    password: "",
}

const LoginForm = () => {
    
    const FeedbackSchema = Yup.object().shape({
        name: Yup.string()
          .min(3, "Too Short!")
          .max(50, "Too Long!")
          .required("Required"),
        password: Yup.string()
          .min(3, "Too Short!")
          .max(15, "Too Long!")
          .required("Required"),
      });

      const dispatch = useDispatch();

      const handleSubmit = (values, actions) => {
        dispatch(
            loginUser({
                name: values.name,
                password: values.password,
            })
        );
        actions.resetForm();
      }

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        <Form>
            <label>User name</label>
            <Field type="text" name="name" />
            <label>Password</label>
            <Field type="text" name="password"/>
            <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  )
}

export default LoginForm
