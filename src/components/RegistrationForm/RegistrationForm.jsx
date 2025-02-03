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

const RegistrationForm = () => {

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
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Registration
                  </h1>
                <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
              <Form className="space-y-4 md:space-y-6">
                

                    <label className="input w-full">
                  <Field type="text" name="name" placeholder="Your name"/>
                  </label>
                <ErrorMessage name="name" component="div" className="error" />



                      <label className="input w-full">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
            <Field type="email" name="email" placeholder="mail@site.com" required/>
          </label>
                      <ErrorMessage name="email" component="div" className="error" />
          
                     
                
                
                <label className="input w-full">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
            <Field type="password" name="password" required placeholder="Password"/>
          </label>
          <ErrorMessage name="password" component="div" className="error" />
          
                      <button type="submit" className="w-full btn btn-soft btn-accent">Register</button>
          
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already register?<Link to="/login" className="w-full text-teal-500 bg-primary-600 hover:bg-primary-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700">Login</Link>
                      </p>
                    </Form>
                </Formik>
              </div>
            </div>
          </div>
    )
}

export default RegistrationForm;