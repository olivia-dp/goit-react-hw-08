import { Formik, Form, Field } from "formik"
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { SignUpUser } from "../../redux/auth/operations";


const initialValues = {
    name: "",
    email: "",
    password: "",
}

const RegistrationForm = () => {
    
    const FeedbackSchema = Yup.object().shape({
        name: Yup.string()
          .min(3, "Too Short!")
          .max(50, "Too Long!")
          .required("Required"),
          email: Yup.string()
          .min(3, "Too Short!")
          .max(15, "Too Long!")
          .required("Required"),
        password: Yup.string()
          .min(3, "Too Short!")
          .max(15, "Too Long!")
          .required("Required"),
      });

      const dispatch = useDispatch();

      const handleSubmit = (values, actions) => {
        dispatch(
            SignUpUser({
                name: values.name,
                email: values.email,
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
            <label>Email</label>
            <Field type="email" name="email" />
            <label>Password</label>
            <Field type="text" name="password"/>
            <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  )
}

export default RegistrationForm
