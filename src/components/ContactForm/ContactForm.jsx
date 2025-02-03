import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch } from 'react-redux';
import { addThunkContact } from '../../redux/contacts/operations';

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d+$/, "Number must contain only digits")
      .min(3, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
  });
  
  const dispatch = useDispatch();
  
const handleSubmit = (values, actions) => {
    dispatch(
      addThunkContact({
        name: values.name,
        number: values.number,
      })
    );

    actions.resetForm();
  };


  return (
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <Formik initialValues={ initialValues } onSubmit={handleSubmit} validationSchema={validationSchema} >
          <Form className="space-y-4 md:space-y-6">
            <label className="input w-full">Name
            <Field type="text" name="name" /></label>
          <ErrorMessage name="name" component="span" className="alert alert-error alert-dash"/>
          
            <label className="input w-full">Number
            <Field type="number" name="number" /></label>
            <ErrorMessage name="number" component="span" className="alert alert-error alert-dash"/>
            <button type="submit" className="w-full btn btn-soft btn-accent">Add contact</button>
    			</Form>
        </Formik>
      </div>
    
  );
};

export default ContactForm;