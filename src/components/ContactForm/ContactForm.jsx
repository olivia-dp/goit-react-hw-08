import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import s from "./ContactForm.module.css";
import { useDispatch } from 'react-redux';
import { addThunkContact } from '../../redux/contactsOps';

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d+$/, "Number must contain only digits") // Проверка только чисел
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
      <Formik initialValues={ initialValues } onSubmit={handleSubmit} validationSchema={FeedbackSchema} >
        <Form className={s.form}>
          <label>Name</label>
          <Field type="text" name="name" className={s.field} />
          <ErrorMessage name="name" component="span" className={s.error} />
          <label>Number</label>
          <Field type="number" name="number" className={s.field} />
          <ErrorMessage name="number" component="span" className={s.error}/>
          <button type="submit" className={s.button}>Add contact</button>
  			</Form>
      </Formik>
    
  );
};

export default ContactForm;